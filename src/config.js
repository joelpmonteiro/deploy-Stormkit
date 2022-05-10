const cors = require("cors")
const express = require("express")
const app = express()
const routes = require('./router.js')
const corOP = {
    origin: true,
    credentials: true,

    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

//Active Cors
app.use(cors(corOP))
app.options("*", cors(corOP))

//Enable CORS for all HTTP methods
app.use((err, req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token"
    )
    next()
})

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use('/', routes)
module.exports = { app }
