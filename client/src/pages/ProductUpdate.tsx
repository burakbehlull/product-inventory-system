import axios from 'axios'
import { useState } from 'react'
import { BACKEND_URI } from '../../../config.json'
import {useSelector} from 'react-redux'

const ProductUpdate = () => {
    const [form, setForm] = useState({
        productName: "",
        piece: 0,
        unitPrice: 0,
        total: 0
    })

    const {id} = useSelector((state:number|any)=> state.keep) 

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
            axios.put(BACKEND_URI + `/api/products/${id}`, formObject).then((res)=>{
                setData(res.data)
            }).catch((err)=>setError(err))
        }
        
    }

    return(
        <div className="item">
            <p>Toplu Güncelleme İşlemi: </p>
            {data && <>
                {data?.success ? "Başarıyla güncellendi" : "İşlem başarısız."}
            </>}
            {error && error?.message}

            <div>
                <label htmlFor="productName">Product Name: </label>
                <input type='text' name='productName' value={form.productName} onChange={handleChange} />

                <label htmlFor="unitPrice">Unit Price: </label>
                <input type='number' name='unitPrice' value={form.unitPrice} onChange={handleChange} />

            </div>
            <div>
                <label htmlFor="piece">Piece: </label>
                <input type='number' name='piece' value={form.piece} onChange={handleChange} />

                <label htmlFor="total">Total: </label>
                <input type='number' name='total' value={form.total} onChange={handleChange} />
            </div>
            <button onClick={handleSubmit}>Güncelle</button>

        </div>
    )
}

export default ProductUpdate