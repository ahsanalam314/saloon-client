import { NextFunction, Request, Response, Router } from "express";
import { AccountController } from '../controllers';
import { dtoValidator } from "../middlewares/validators/dto-validator.middleware";
import { RegisterDTO, LoginDTO } from "../dto";


const accountController = new AccountController();
const router = Router();

router.post('/register', dtoValidator(RegisterDTO), (request: Request, response: Response, next: NextFunction) => accountController.registerAccount(request, response, next));
router.post('/login', dtoValidator(LoginDTO), (request: Request, response: Response, next: NextFunction) => accountController.login(request, response, next));


export default router;
