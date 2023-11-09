const { default: mongoose } = require('mongoose');

const Schema = require('mongoose').Schema;


const reportSchema = new Schema({
    agency: {
        type: String,
        required: true,
    },
    report: {
        type: String,
        required: true,
    },
    images: {
        type: String,
    },
    name: {
        type: String, default: 'anonymous'
    }
});

const report = mongoose.model('Report', reportSchema);
module.exports = report;