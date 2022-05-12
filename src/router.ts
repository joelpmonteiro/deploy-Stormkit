import { Router, Request, Response } from "express";
const app = Router()

app.post('/send', (req: Request, res: Response) => {
    const { body } = req
    return res.status(200).json({ dados: body, msg: "Dados enviados!" })
})
app.get('/test', (req: Request, res: Response) => {
    return res.status(200).json({ msg: 'hello world' })
})

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ msg: 'pagina principal' })
})
export default app