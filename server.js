const express = require('express')
const caminhosTestes = require('./routes/caminhosTestes')
const app = express()

const PORT = (process.env.PORT || 3000)


app.use('/segmento',caminhosTestes);

app.use(express.static(__dirname + '/css'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(PORT, ()=> {
    console.log('Servidor ouvindo');
})