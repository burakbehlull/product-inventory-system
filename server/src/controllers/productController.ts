import {Response, Request} from 'express'
import {findAll} from '../helpers/queries.js'
import Product from '../models/Product.js'

async function productsAll(req:Request, res:Response){
    const products = await Product.all()
    res.json(products)
}

async function productAdd(req:Request, res:Response){
    const {productName, piece, unitPrice, total} = req.body
    
    const product:any = await Product.create(productName, piece, unitPrice, total)
    res.json(product)
}

async function productOneByIdUpdate(req:Request, res:Response){
    const id = Number(req.params.id)
    const {value, key} = req.body
    const update:any = await Product.updateOneById(key, {id,value})
    res.json(update)
}

async function productOneByIdDelete(req:Request, res:Response){
    try {
        const id = Number(req.params.id)
        const product = await Product.deleteOneById(id)

        if(!product.affectedRows){
            res.json({
                message: 'Kayıt bulunamadı.',
                success: false,
            })
        }
        res.json({
            message: 'Başarılı',
            success: true,
            product: product
        })
        
    } catch (err) {
        res.json({
            message: "Başarısız",
            success: false,
            error: err
        })
    }
}


export {
    productsAll,
    productAdd,
    productOneByIdUpdate,
    productOneByIdDelete
}