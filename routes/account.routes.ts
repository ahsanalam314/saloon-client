import { Request, Response, Router } from "express";
import { AccountController } from '../controllers';
import { dtoValidator } from "../middlewares/validators/dto-validator.middleware";
import { RegisterDTO, LoginDTO } from "../dto";


const accountController = new AccountController();
const router = Router();

router.post('/register', dtoValidator(RegisterDTO), (request: Request, response: Response) => accountController.registerAccount(request, response));
router.post('/login', dtoValidator(LoginDTO), (request: Request, response: Response) => accountController.login(request, response));


export default router;
