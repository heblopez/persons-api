import { Router } from 'express';
import {
  createPerson,
  deletePersonById,
  getPersonById,
  getPersons,
  updatePersonById
} from '../controllers/person.controller';

const personsRouter = Router();

personsRouter.get('/', getPersons);
personsRouter.get('/:id', getPersonById);
personsRouter.delete('/:id', deletePersonById);
personsRouter.post('/', createPerson);
personsRouter.put('/:id', updatePersonById);

export default personsRouter;
