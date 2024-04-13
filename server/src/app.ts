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
router.get("/createdb", (req: Request, res: Response) =>{
    conf.createDataBase();
    res.send("Base de datos creada");
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
