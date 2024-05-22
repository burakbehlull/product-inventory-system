import exress, {Router} from 'express'
import {productsAll} from '../controllers/productController.js'
const router : Router = exress.Router()

router.route('/all').get(productsAll)

export default router

