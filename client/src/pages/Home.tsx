import {BACKEND_URI} from '../../../config.json'

import useFetch from '../hooks/useFetch'
import Table from './Table'
import ProductAdd from './ProductAdd'
import { useState } from 'react'
import {Modal} from '../components/index'
function Home(){
    const [isVisible, setIsVisible] = useState(false)
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
                <button onClick={()=> setIsVisible(!isVisible)}>Ürün Ekle</button>
                <Modal isVisible= {isVisible} children={<ProductAdd />} />

                <br />

            </article>
        </section>
    )  
}

export default Home
