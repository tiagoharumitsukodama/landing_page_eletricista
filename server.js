const express = require('express')
const caminhosTestes = require('./routes/caminhosTestes')
const app = express()


app.use('/segmento',caminhosTestes)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/teste.html')
})

app.listen(5000)