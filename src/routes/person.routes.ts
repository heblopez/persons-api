import { Router } from 'express';
import { getPersonById, getPersons } from '../controllers/person.controller';

const personsRouter = Router();

personsRouter.get('/', getPersons);
personsRouter.get('/:id', getPersonById);

export default personsRouter;
