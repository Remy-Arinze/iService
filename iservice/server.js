require('dotenv/config')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const PORT = process.env.port || 5000;

const Report = require('./models/Schema')
const upload = require('./middlewares/multer')
const { cloudinary } = require('./middlewares/cloudinary')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

mongoose.connect(process.env.dbUri).then(() => {
    console.log('connected to db');
}).catch((err) => console.log(err))


app.get('/report/:id', (req, res) => {
    console.log('query', req.params)
    Report.findById(req.params.id, (err, report) => {
        if (err) {
            console.log(err)
        }
        res.status(200).json(report)
    })
})

app.get('/reports', (req, res) => {
    Report.find({}, (err, report) => {
        if (err) {
            console.log(err)
        }
        res.status(200).json(report)
    })
})



app.post('/report', upload.single('image'), async (req, res, next) => {

    console.log(req.body.images)
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        console.log('result url', result.url)
        const dbItem = new Report({
            name: req.body.name,
            agency: req.body.agency,
            report: req.body.report,
            images: result.url
        })

        dbItem.save().then(() => res.status(200).json({
            msg: 'added successfully',
            data: dbItem
        }))
    } catch (e) { console.log('this is the err', e.message) }

})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});