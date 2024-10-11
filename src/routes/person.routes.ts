import { Router } from 'express';
import { getPersons } from '../controllers/person.controller';

const personsRouter = Router();

personsRouter.get('/', getPersons);

export default personsRouter;
