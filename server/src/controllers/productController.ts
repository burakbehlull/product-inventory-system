import {Response, Request} from 'express'
import {findAll,insert} from '../helpers/queries.js'
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



export {
    productsAll,
    productAdd
}