import exress, {Router} from 'express'
import {productsAll, productAdd, productOneByIdUpdate,productOneByIdDelete } from '../controllers/productController.js'
const router : Router = exress.Router()

router.route('/all').get(productsAll)
router.route('/add').post(productAdd)
router.route('/update/:id').patch(productOneByIdUpdate)
router.route('/delete/:id').delete(productOneByIdDelete)


export default router

