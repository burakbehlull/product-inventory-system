import axios from 'axios'
import { useState } from 'react'

import {BACKEND_URI} from '../../../config.json'

const ProductAdd = () => {
    const [form, setForm] = useState({
        productName: "",
        piece: 0,
        unitPrice: 0,
        total: 0
    })

    const formObject = {
        productName: form.productName,
        piece: Number(form.piece),
        unitPrice: Number(form.unitPrice),
        total: Number(form.total),
    }

    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<any>(null)

    function handleChange(e:any){
        setForm({...form, [e.target.name]: e.target.value})
    }
    function handleSubmit(){
        if(formObject){
            axios.post(BACKEND_URI + "/api/products", formObject).then((res)=>{
                setData(res.data)
            }).catch((err)=>setError(err))
        }
        
    }

    return(
        <>
            <p>Toplu Güncelleme İşlemi: </p>
            {data && <>
                {data?.success ? "Başarıyla eklendi" : "İşlem başarısız."}
            </>}
            {error && error?.message}
            <br />
            <label htmlFor="productName">Product Name: </label>
            <input type='text' name='productName' value={form.productName} onChange={handleChange} />
            <br /><br />
            <label htmlFor="unitPrice">Unit Price: </label>
            <input type='number' name='unitPrice' value={form.unitPrice} onChange={handleChange} />
            <br /><br />
            <label htmlFor="piece">Piece: </label>
            <input type='number' name='piece' value={form.piece} onChange={handleChange} />
            <br /><br />
            <label htmlFor="total">Total: </label>
            <input type='number' name='total' value={form.total} onChange={handleChange} />
            <br /><br />

            <button onClick={handleSubmit}>Ekle</button>

        </>
    )
}

export default ProductAdd