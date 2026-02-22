import { Router } from "express";
import { Feedbacks, FeedController } from "../controllers/FeedBackControllers.js";
import verifyuser from "../Middlewares/Jwt.middleware.js";

const FeedRouter = Router()

FeedRouter.post('/feedback',FeedController)


FeedRouter.get('/feeds',verifyuser,Feedbacks)

export default FeedRouter