const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

mongoose
    .connect(
        'mongodb+srv://freonzx:235689a@cluster0-a4fmk.mongodb.net/omnistack9?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .catch(e => {
        console.log(e.message)
    })

app.use(require('./routes'))

app.listen(4000, () => {
    console.log('🚀 Server listening at port 4000')
})
