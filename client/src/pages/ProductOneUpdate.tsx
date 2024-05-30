import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { BACKEND_URI } from '../../../config.json'

const ProductOneUpdate = () => {
    const [value, setValue] = useState<any>('')
    const [choose, setChoose] = useState<any>('productName')
    
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<any>(null)

    const {id} = useSelector((state:number|any)=> state.keep) 

    function handleChange(e:any){
        setValue(e.target.value)
    }
    function handleSubmit(){
        if(value && choose){
            axios.patch(BACKEND_URI + `/api/products/${id}`, {
                key: choose,
                value: value
            }).then((res)=>{
                setData(res.data)
            }).catch((err)=>setError(err))
        }
        
    }

    return(
        <div className="item">
            <p>Tekli Güncelleme İşlemi: </p>
            {data && <>
                {data?.success ? "Başarıyla güncellendi" : "İşlem başarısız."}
            </>}
            {error && error?.message}

            <select name="keys" onChange={(e:any)=> setChoose(e.target.value)}>
                <option value="productName">Ürün Adı</option>
                <option value="piece">Adet</option>
                <option value="unitPrice">Birin Fiyat</option>
                <option value="total">Toplam</option>
            </select>
            
            <div>
                <label>{choose}: </label>
                <input type='text' value={value} onChange={handleChange} />
            </div>
            <button onClick={handleSubmit}>Güncelle</button>
        </div>
    )
}

export default ProductOneUpdate