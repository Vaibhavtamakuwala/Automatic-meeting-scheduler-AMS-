const mongoose = require('mongoose')
const Schema = mongoose.Schema

const classesSchema = new mongoose.Schema({
    classes_name: {
        type: String,
        required: true
    }
}, { collection : 'classes' })
const classes = mongoose.model('classes', classesSchema);
module.exports = classes;