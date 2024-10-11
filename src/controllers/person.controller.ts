import { persons } from '../data/persons';
import { Request, Response } from 'express';

export const getPersons = (_req: Request, res: Response): void => {
  res.json(persons);
};
