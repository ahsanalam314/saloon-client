import { Router } from "express";
import accountRouters from './account.routes';
import companyRoutes from './company.routes';

const router = Router();

router.use('/account', accountRouters);
router.use('/company', companyRoutes);


export default router;






