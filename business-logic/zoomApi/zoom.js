const express = require('express');
const app = express();
//const port = process.env.PORT || 3000;
var http = require('http').Server(app);
const path = require('path');
const fs = require('fs')
const rp = require('request-promise');
const jwt = require('jsonwebtoken');
const router = express.Router();


const payload = {
    iss: 'YNlU_03ISGWb5Fid0TBXPw',
    exp: ((new Date()).getTime() + 5000)
};
const token = jwt.sign(payload, 'Kdul5yHdyd0Y4APlq10aQXnyQIvJbhUN3Yad');


router.get("/newmeeting", (req, res) => {
  email = "vaibhavtamakuwala95@gmail.com";
  var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic: "test meeting",
      type: 1,
      settings: {
        host_video: "true",
        participant_video: "true"
      }
    },
    auth: {
      bearer: token
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json"
    },
    json: true //Parse the JSON string in the response
  };

  rp(options)
    .then(function(response) {
      console.log("response is: ", response);
      res.send("create meeting result: " + JSON.stringify(response));
    })
    .catch(function(err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});
module.exports = router;
//http.listen(port, () => console.log(`Listening on port ${port}`));