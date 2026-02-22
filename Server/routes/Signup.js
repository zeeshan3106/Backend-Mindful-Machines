import { Router } from "express";
import { GetUsers, SignupController } from "../controllers/Signup.controller.js";


const SignupRouter = Router()

SignupRouter.post('/signup',SignupController)

SignupRouter.get('/getallusers',GetUsers)


export default SignupRouter