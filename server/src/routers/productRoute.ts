import exress, {Router} from 'express'
import {productsAll, productAdd, productOneUpdateById, productOneDeleteById,productUpdateAllById } from '../controllers/productController.js'
const router : Router = exress.Router()

router.route('/product').get(productsAll)
router.route('/product').post(productAdd)
router.route('/product/:id').patch(productOneUpdateById)
router.route('/product/:id').put(productUpdateAllById)
router.route('/product/:id').delete(productOneDeleteById)


export default router

