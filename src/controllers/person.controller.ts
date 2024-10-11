import { persons } from '../data/persons';
import { Request, Response } from 'express';

export const getPersons = (_req: Request, res: Response): void => {
  res.json(persons);
};

export const getPersonById = (req: Request, res: Response): Response => {
  const { id } = req.params;

  const person = persons.find((person) => person.id === parseInt(id));

  if (!person) {
    return res.status(404).json({ message: 'Person not found' });
  }

  return res.json(person);
};
