import express from "express";
import { PORT } from "./config.js";
import modules from "./modules/index.js";
import cors from 'cors';
import path from 'path';
import auth from "./middlewares/checkToken.js";

const app = express(); 
app.use(express.json());
app.use(cors());
app.use('/static', express.static(path.join(process.cwd(),'uploads')))
app.use(auth, modules);

app.listen(PORT, () => console.log(`server ready at http://localhost:${PORT}`));