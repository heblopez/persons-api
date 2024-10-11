import { Router } from 'express';
import {
  createPerson,
  deletePersonById,
  getPersonById,
  getPersons
} from '../controllers/person.controller';

const personsRouter = Router();

personsRouter.get('/', getPersons);
personsRouter.get('/:id', getPersonById);
personsRouter.delete('/:id', deletePersonById);
personsRouter.post('/', createPerson);

export default personsRouter;
