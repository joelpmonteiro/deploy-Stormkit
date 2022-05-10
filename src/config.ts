import cors from "cors";
import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import routers from "./router"

const app = express()
const corOP = {
    origin: true,
    credentials: true,

    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

//Active Cors
app.use(cors(corOP))
app.options("*", cors<Request>(corOP))

//Enable CORS for all HTTP methods
app.use((req: Request, res: Response, next: NextFunction) => {
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



app.use('/', routers)
export default app