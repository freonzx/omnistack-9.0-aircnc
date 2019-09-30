const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect(
    'mongodb+srv://freonzx:235689a@cluster0-a4fmk.mongodb.net/omnistack7?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(require('./routes'))

app.listen(4000)
