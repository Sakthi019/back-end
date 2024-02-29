import express, { Express } from "express";
import dotenv from "dotenv";
import bindRoutes from "./src/routes";
import connectDatabase from './src/database';
import bodyParser from "body-parser";
import cors from 'cors';

connectDatabase()
  .then(() => {
    console.log('db is connected');
  })
  .catch((error) => {
    console.error('Error initializing application:', error);
    process.exit(1);
  });

dotenv.config();
const app: Express = express();
const port = 9000;
app.use(bodyParser.json())
app.use(cors());

bindRoutes(app)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});