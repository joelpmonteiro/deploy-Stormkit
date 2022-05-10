"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.Router)();
app.get('/test', (req, res) => {
    return res.status(200).json({ msg: 'hello world' });
});
app.get('/', (req, res) => {
    return res.status(200).json({ msg: 'pagina principal' });
});
exports.default = app;
