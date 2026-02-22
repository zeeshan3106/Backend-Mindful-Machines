import { Router } from "express"; 
import { ProfileControler, ProfileGet } from "../controllers/ProfileControllers.js";
import verifyuser from "../Middlewares/Jwt.middleware.js";


const ProfileRouter = Router()


ProfileRouter.post('/profile',ProfileControler)
console.log('Product route file loaded');



ProfileRouter.get('/getprofiles',verifyuser,ProfileGet)

console.log('Profile 2nd route file loaded');

export default ProfileRouter

