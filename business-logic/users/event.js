var MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
var url = "mongodb+srv://admin:password_123@cluster0.ac3ws.mongodb.net/";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname))

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ams");
    router.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    router.post("/get_event", (req, res) => {
        dbo.collection('events').find({}).toArray((err, cus) => {
            res.send(cus);
        });
    });
    router.post("/add_event", (req, res) => {
        console.log(req.body);
        var eventData = [];
        if (req.body.action == "insert" || (req.body.action == "batch" && req.body.added.length > 0)) {
            (req.body.action == "insert") ? eventData.push(req.body.value) : eventData = req.body.added;
            for (var i = 0; i < eventData.length; i++) {
                var sdate = new Date(eventData[i].StartTime);
                var edate = new Date(eventData[i].EndTime);
                eventData[i].StartTime = (new Date(+sdate - (sdate.getTimezoneOffset() * 60000)));
                eventData[i].EndTime = (new Date(+edate - (edate.getTimezoneOffset() * 60000)));
                dbo.collection('events').insertOne(eventData[i]);
            }
        }
        if (req.body.action == "update" || (req.body.action == "batch" && req.body.changed.length > 0)) {
            (req.body.action == "update") ? eventData.push(req.body.value) : eventData = req.body.changed;
            for (var i = 0; i < eventData.length; i++) {
                delete eventData[i]._id;
                var sdate = new Date(eventData[i].StartTime);
                var edate = new Date(eventData[i].EndTime);
                eventData[i].StartTime = (new Date(+sdate - (sdate.getTimezoneOffset() * 60000)));
                eventData[i].EndTime = (new Date(+edate - (edate.getTimezoneOffset() * 60000)));
                dbo.collection('events').updateOne({ "Id": eventData[i].Id }, { $set: eventData[i] });
            }
        }
        if (req.body.action == "remove" || (req.body.action == "batch" && req.body.deleted.length > 0)) {
            (req.body.action == "remove") ? eventData.push({ Id: req.body.key }) : eventData = req.body.deleted;
            for (var i = 0; i < eventData.length; i++) {
                dbo.collection('events').deleteOne({ "Id": eventData[i].Id });
            }
        }
        res.send(req.body);
    });
});
module.exports = router