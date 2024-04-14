import express, { Request, Response } from 'express';
import { Config } from './config/config';

const app = express();
const Router = express.Router();
const port = process.env.PORT || 3000;
const conf = new Config();

// Middleware para manejar JSON
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", Router);
app.use(express.json());
// Ruta base
Router.get("/", (req: Request, res: Response) => {
    res.send("¡Bienvenido a mi API!");
});

// Ruta para crear la base de datos
Router.get("/createdb", async (req: Request, res: Response) => {
    try {
        // Llamamos a createDatabase de forma asincrónica
        await conf.createDatabase();
        res.send("Base de datos creada con éxito");
    } catch (error) {
        console.error("Error creando la base de datos:", error);
        res.status(500).send("Error creando la base de datos");
    }
});

// Ruta para limpiar la base de datos
Router.get("/cleardb", async (req: Request, res: Response) => {
    try {
        // Llamamos a clearDatabase de forma asincrónica
        await conf.clearDatabase();
        res.send("Base de datos limpiada con éxito");
    } catch (error) {
        console.error("Error limpiando la base de datos:", error);
        res.status(500).send("Error limpiando la base de datos");
    }
});

// Ruta para eliminar la base de datos
Router.get("/dropdb", async (req: Request, res: Response) => {
    try {
        // Llamamos a dropDatabase de forma asincrónica
        await conf.dropDatabase();
        res.send("Base de datos eliminada con éxito");
    } catch (error) {
        console.error("Error eliminando la base de datos:", error);
        res.status(500).send("Error eliminando la base de datos");
    }
});

Router.get("/ping", async (req: Request, res: Response) => {
    res.send("Pong!");
});

Router.get("/users", async (req: Request, res: Response) => {
    try {
        const users = await conf.getAllUsers().then(users => users); // Llamamos a getAllUsers de forma asincrónica y la guardamos en una variable
        res.json(users);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).send("Error al obtener los usuarios");
    }
});

Router.get("/questions", async (req: Request, res: Response) => {
    try {
        const questions = await conf.getAllQuestions().then(questions => questions);
        res.json(questions);
    } catch (error) {
        console.error("Error al obtener las preguntas:", error);
        res.status(500).send("Error al obtener las preguntas");
    }
});

Router.post("/users", async (req: Request, res: Response) => {
    try {
        const user = await conf.createUser(req.body).then(user => user);
        res.json(user);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).send("Error al crear el usuario");
    }
});

Router.post("/questions", async (req: Request, res: Response) => {
    try {
        const question = await conf.createQuestion(req.body).then(question => question);
        res.json(question);
    } catch (error) {
        console.error("Error al crear la pregunta:", error);
        res.status(500).send("Error al crear la pregunta");
    }
});

Router.post("/userquestionrelation", async (req: Request, res: Response) => {
    try {
        const userQuestionRelation = await conf.createUserQuestionRelation(req.body).then(userQuestionRelation => userQuestionRelation);
        res.json(userQuestionRelation);
    } catch (error) {
        console.error("Error al crear la relación entre usuario y pregunta:", error);
        res.status(500).send("Error al crear la relación entre usuario y pregunta");
    }
});

// Conexión a la base de datos y configuración del servidor
conf.connectToDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor escuchando en el puerto: ${port}`);
        });
    })
    .catch(error => {
        console.error("Error conectando a la base de datos:", error);
        process.exit(1); // Termina el proceso si no se puede conectar a la base de datos
    });
