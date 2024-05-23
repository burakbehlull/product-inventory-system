import exress, {Router} from 'express'
import {productsAll, productAdd, productOneUpdate} from '../controllers/productController.js'
const router : Router = exress.Router()

router.route('/all').get(productsAll)
router.route('/add').post(productAdd)
router.route('/update/:id').put(productOneUpdate)


export default router

