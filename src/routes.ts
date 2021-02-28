import { Request, Response, Router } from "express";

const router = Router();

router.get("/", function (req: Request, res: Response) {
    res.json({
        message: "Teste de rota!"
    })
})

export { router }