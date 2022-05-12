import { Router, Request, Response } from "express";
const app = Router()

app.post('/send', (req: Request, res: Response) => {
    const { body } = req
    return res.status(200).json({ dados: body, msg: "Dados enviados!" })
})

app.get('/send/:id', (req: Request, res: Response) => {
    const { id } = req.params
    return res.status(200).json({ dados: id, msg: "Dados enviados!" })
})

app.get('/get', (req: Request, res: Response) => {
    return res.status(200).json({ msg: 'hello world' })
})

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ msg: 'pagina principal' })
})
export default app