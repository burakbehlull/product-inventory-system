import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { BACKEND_URI } from '../../../config.json'

const ProductOneUpdate = () => {
    
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<any>(null)

    const {id} = useSelector((state:number|any)=> state.keep) 

    function handleSubmit(){
        if(id){
            axios.delete(BACKEND_URI + `/api/products/${id}`).then((res)=>{
                setData(res.data)
            }).catch((err)=>setError(err))
        }
        
    }

    return(
        <>
            <p>Tekli Silme İşlemi: </p>
            {data && <>
                {data?.success ? "Başarıyla silindi." : "İşlem başarısız."}
            </>}
            {error && error?.message}
            <button onClick={handleSubmit}>Sil</button>
        </>
    )
}

export default ProductOneUpdate