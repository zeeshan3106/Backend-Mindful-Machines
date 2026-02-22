import { Router } from "express";
import { CategoryController, DeleteCategory, GetByCategory, GetCategories, SearchPRoducts } from "../controllers/Category.Controller.js";


const CategoryRouter = Router()

CategoryRouter.post('/addCategory',CategoryController)
CategoryRouter.get('/getCategory',GetCategories)
CategoryRouter.get('/deleteCategory',DeleteCategory)

CategoryRouter.get('/getbycategory',GetByCategory)

CategoryRouter.get('/SearchItem',SearchPRoducts)


export default CategoryRouter