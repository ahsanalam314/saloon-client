import { Router } from "express";
import { AccountController } from '../controllers';
import { dtoValidator } from "../middlewares/validators/dto-validator.middleware";
import { RegisterDTO, LoginDTO } from "../dto";


const accountController = new AccountController();
const router = Router();

router.post('/register', dtoValidator(RegisterDTO), accountController.registerAccount);
router.post('/login', dtoValidator(LoginDTO), accountController.login);


export default router;






