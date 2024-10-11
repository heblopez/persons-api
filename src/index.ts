import express from 'express';
import personsRouter from './routes/person.routes';

const app = express();

app.use(express.json());

app.get('/api', (_req, res) => {
  res.send('Hello World!');
});

app.use('/api/persons', personsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
