import {Router} from 'express'
import { filteredData, getbyid, getbyidAndDelete, GetProduct, Product, UpdateProduct } from '../controllers/product.controller.js'
import verifyuser from '../Middlewares/Jwt.middleware.js';



const Productroute = Router()

Productroute.post('/product',Product)
console.log('Product route file loaded');




Productroute.get('/getall',verifyuser,GetProduct)
console.log('Product Get route file loaded');


Productroute.put('/updateproducts/:id',UpdateProduct)
console.log("Your Typical Product updation route Done")




Productroute.get('/filterdata',filteredData)
console.log("Filtered Data...")


export default Productroute