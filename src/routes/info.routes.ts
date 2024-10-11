import { getInfo } from '@/controllers/info.controller';
import { Router } from 'express';

const infoRouter = Router();

infoRouter.get('/', getInfo);

export default infoRouter;
