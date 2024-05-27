import {Response, Request} from 'express'
import {findAll,updateAllById} from '../helpers/queries.js'
import Product from '../models/Product.js'

async function productsAll(req:Request, res:Response){
    try {
        const products = await Product.all()
        res.json(products)
    } catch (err) {
        res.json({
            error: err
        })
    }
}

async function productAdd(req:Request, res:Response){
    try {
        const {productName, piece, unitPrice, total} = req.body
    
        const product= await Product.create(productName, piece, unitPrice, total)
        
        if(!product.affectedRows){
            res.json({
                message: 'Kayıt başarısız eklenmedi.',
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
            message: 'Başarısız',
            success: false,
            error: err
        })
    }
}

async function productOneUpdateById(req:Request, res:Response){
    try {
        const id = Number(req.params.id)
        const {value, key} = req.body
        const product = await Product.updateOneById(key, {id,value})
        
        if(!product.changedRows){
            res.json({
                message: 'Güncellenmedi',
                success: false,
            })
        }
        res.json({
            message: "Başarılı",
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

async function productOneDeleteById(req:Request, res:Response){
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

async function productUpdateAllById(req:Request, res:Response) {
    try {
        const id = Number(req.params.id)
        const {productName, piece, unitPrice, total} = req.body
        const product = await Product.updateAllById({
            values: [productName, piece, unitPrice, total],
            id:id
        })
        
        if(!product.changedRows){
            res.json({
                message: 'Güncellenmedi',
                success: false,
            })
        }
        res.json({
            message: "Başarılı",
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
    productUpdateAllById,
    productOneUpdateById,
    productOneDeleteById,
}