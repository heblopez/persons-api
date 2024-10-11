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

export const deletePersonById = (req: Request, res: Response): Response => {
  const { id } = req.params;

  const person = persons.find((person) => person.id === parseInt(id));

  if (!person) {
    return res.status(404).json({ message: 'Person to delete not found' });
  }

  persons.splice(persons.indexOf(person), 1);

  return res.json({ message: 'Person deleted' });
};

export const createPerson = (req: Request, res: Response): Response => {
  const { name, number } = req.body;

  let newId = Math.ceil(Math.random() * 1000);

  while (persons.find((person) => person.id === newId)) {
    newId = Math.ceil(Math.random() * 1000);
  }

  const person = {
    id: newId,
    name,
    number: number.toString()
  };

  persons.push(person);

  return res.json(person);
};
