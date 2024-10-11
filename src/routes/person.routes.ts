import { Router } from 'express';
import {
  deletePersonById,
  getPersonById,
  getPersons
} from '../controllers/person.controller';

const personsRouter = Router();

personsRouter.get('/', getPersons);
personsRouter.get('/:id', getPersonById);
personsRouter.delete('/:id', deletePersonById);

export default personsRouter;
