import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import personsRouter from './routes/person.routes';
import infoRouter from './routes/info.routes';

const app = express();

app.use(express.json());

app.use(
  morgan('tiny', {
    skip: (req: Request) => req.method === 'POST'
  })
);

morgan.token('body', (req: Request) => {
  return req.method === 'POST' ? JSON.stringify(req.body) : '';
});

app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :body',
    {
      skip: (req: Request) => req.method !== 'POST'
    }
  )
);

app.get('/api', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(cors());

app.use('/api/persons', personsRouter);
app.use('/info', infoRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
