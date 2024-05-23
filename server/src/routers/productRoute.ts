import exress, {Router} from 'express'
import {productsAll, productAdd} from '../controllers/productController.js'
const router : Router = exress.Router()

router.route('/all').get(productsAll)
router.route('/add').post(productAdd)

export default router

