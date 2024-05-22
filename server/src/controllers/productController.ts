import {Response, Request} from 'express'
import {findAll} from '../helpers/queries.js'

async function productsAll(req:Request, res:Response){
    const products = await findAll('todos')
    res.json(products)
}

function productOne(req:Request, res:Response){}

export {
    productsAll,
}