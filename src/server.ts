import express, {
  Express, NextFunction, Request, Response,
} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;

const corsOptions = {
  origin: `http://localhost:${port}`,
};

const app: Express = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ message: 'sup' });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
