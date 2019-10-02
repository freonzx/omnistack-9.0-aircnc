const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

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
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(require('./routes'))

app.listen(4000, () => {
    console.log('🚀 Server listening at port 4000')
})
