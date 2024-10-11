import express from 'express';
import personsRouter from './routes/person.routes';
import infoRouter from './routes/info.routes';

const app = express();

app.use(express.json());

app.get('/api', (_req, res) => {
  res.send('Hello World!');
});

app.use('/api/persons', personsRouter);
app.use('/info', infoRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
