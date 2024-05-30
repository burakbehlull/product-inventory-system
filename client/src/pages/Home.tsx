import {BACKEND_URI} from '../../../config.json'

import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import {Modal} from '../components/index'
import {Table, ProductAdd, ProductUpdate} from '../pages/index'
function Home(){
    const [addIsVisible, setAddIsVisible] = useState(false)
    const [updateIsVisible, setUpdateIsVisible] = useState(false)
    const {data, error, loading} = useFetch(BACKEND_URI+'/api/products')
    if(!loading){
        return <h3>loading...</h3>
    }
    return (
        <section id="home">
            {error ?? error?.message}
            <Table data={data}/>
            <article>
                <h3>Ürün İşlemleri</h3>
                <button onClick={()=> setAddIsVisible(!addIsVisible)}>Ürün Ekle</button>
                <Modal isVisible= {addIsVisible} children={<ProductAdd />} />
                <br /><br />
                <button onClick={()=> setUpdateIsVisible(!updateIsVisible)}>Ürün Güncelle</button>
                <Modal isVisible= {updateIsVisible} children={<ProductUpdate />} />



            </article>
        </section>
    )  
}

export default Home
