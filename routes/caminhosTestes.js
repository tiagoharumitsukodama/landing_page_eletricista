const express = require('express')
const router = express.Router()

router.get('/algumaCoisa', (req, res) => {
    res.send('alguma coisa dentro de segmentos')
})

module.exports = router