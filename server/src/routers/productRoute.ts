import exress, {Router} from 'express'
import {productsAll, productAdd, productOneUpdateById, productOneDeleteById,productUpdateAllById } from '../controllers/productController.js'
const router : Router = exress.Router()

router.route('/products').get(productsAll)
router.route('/products').post(productAdd)
router.route('/products/:id').patch(productOneUpdateById)
router.route('/products/:id').put(productUpdateAllById)
router.route('/products/:id').delete(productOneDeleteById)


export default router

