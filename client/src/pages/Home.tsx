import {BACKEND_URI} from '../../../config.json'

import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import { Modal } from '../components/index'
import { Table, ProductAdd, ProductUpdate,ProductOneUpdate,ProductDelete } from '../pages/index'

import {useSelector} from 'react-redux'

function Home(){
    const [addIsVisible, setAddIsVisible] = useState(false)
    const [updateIsVisible, setUpdateIsVisible] = useState(false)
    const [updateOneIsVisible, setUpdateOneIsVisible] = useState(false)
    const [deleteIsVisible, setDeleteIsVisible] = useState(false)
    const {data, error, loading} = useFetch(BACKEND_URI+'/api/products')
    
    const {id} = useSelector((state:any)=>state.keep)
    if(!loading){
        return <h3>loading...</h3>
    }
    return (
        <section id="home">
            {error ?? error?.message}
            <Table data={data}/>
            <article>
                <h3>Ürün İşlemleri</h3>
                <p>Seçili id: <b>{id}</b></p>
                <button onClick={()=> setAddIsVisible(!addIsVisible)}>Ürün Ekle</button>
                <Modal isVisible= {addIsVisible} children={<ProductAdd />} />
                <br /><br />
                <button onClick={()=> setUpdateIsVisible(!updateIsVisible)}>Çoklu Ürün Güncelle</button>
                <Modal isVisible= {updateIsVisible} children={<ProductUpdate />} />
                <br /><br />
                <button onClick={()=> setUpdateOneIsVisible(!updateOneIsVisible)}>Tekli Ürün Güncelle</button>
                <Modal isVisible= {updateOneIsVisible} children={<ProductOneUpdate />} />
                <br /><br />
                <button onClick={()=> setDeleteIsVisible(!deleteIsVisible)}>Tekli Silme</button>
                <Modal isVisible= {deleteIsVisible} children={<ProductDelete />} />
            </article>
        </section>
    )  
}

export default Home
