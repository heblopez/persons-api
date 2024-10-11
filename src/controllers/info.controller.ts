import { persons } from '@/data/persons';
import { Request, Response } from 'express';

export const getInfo = (_req: Request, res: Response): void => {
  const dateReq = new Date();

  res.set('Content-Type', 'text/html').send(`
    <h1>Persons API | Info</h1>
    <p>Phonebook has info for ${persons.length} people.</p>
    <p>${dateReq.toString()}</p>
  `);
};
