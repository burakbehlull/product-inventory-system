import {Response, Request} from 'express'
import {findAll,insert} from '../helpers/queries.js'

async function productsAll(req:Request, res:Response){
    const products = await findAll('products')
    res.json(products)
}

async function productAdd(req:Request, res:Response){
    const {productName, piece, unitPrice, total} = req.body
    const product:any = await insert({
        name: 'products',
        row: 'productName,piece,unitPrice, total',
        value: [productName, piece, unitPrice, total]
    })
    res.json(product)
}

export {
    productsAll,
    productAdd
}