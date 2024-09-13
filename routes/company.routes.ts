import { Request, Response, Router } from "express";
import { CompanyController } from '../controllers';
import { dtoValidator } from "../middlewares/validators/dto-validator.middleware";
import { RegisterCompanyDTO } from "../dto";


const companyController = new CompanyController();
const router = Router();

router.post('/register', dtoValidator(RegisterCompanyDTO), (request: Request, response: Response) => companyController.createCompany(request, response));


export default router;

