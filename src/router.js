const express = require('express');
const app = express.Router();

app.get('/test', (req, res) => {
    return res.status(200).json({ msg: 'hello world' })
})
app.get('/', (req, res) => {
    return res.status(200).json({ msg: 'pagina principal' })
})
module.exports = app;