import { Router, Request } from "express";
const app = Router()


app.get('/test', (req, res) => {
    return res.status(200).json({ msg: 'hello world' })
})

app.get('/', (req, res) => {
    return res.status(200).json({ msg: 'pagina principal' })
})
export default app