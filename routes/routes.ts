import {Router} from "express";
import accountRouters from './account.routes';
const router = Router();

router.use('/user', accountRouters);

export default router;






