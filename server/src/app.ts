import express, { Request, Response } from 'express';
import { config } from './config/config';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const router = express.Router();
const conf = new config;
router.get("/", (req: Request, res: Response) =>{
    res.send("¡Bienvenido a mi API!");
});
app.use("/api/v1", router);
conf.connectToDatabase().then(()=>{
    app.listen(port, ()=>{
        console.log("Servidor excuchando en el peurto: ", port);
    })
    .on("error", (error)=>{
        throw error;
    });
});
