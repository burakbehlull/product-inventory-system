import {BACKEND_URI} from '../../../config.json'

import useFetch from '../hooks/useFetch'
import Table from '../components/Table'
import ProductAdd from '../components/ProductAdd'

function Home(){
    const {data, error, loading} = useFetch(BACKEND_URI+'/api/products')
    if(!loading){
        return <h3>loading...</h3>
    }
    return (
        <>
            <Table data={data}/>
            {error ?? error?.message}
            <ProductAdd />
    
        </>
    )  
}

export default Home
