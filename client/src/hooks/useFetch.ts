import {useState, useEffect} from 'react'
import axios from 'axios'
export function useFetch(url:string){
    
    const [error, setError] = useState<object | any>(null)   
    const [data, setData] = useState<any>([])   
    const [loading, setLoading] = useState<boolean>(true) 
    
    
    const fetchFunc = async ()=> {
        try {
            const {data: fetchData} = await axios.get(url)
            setData(fetchData)
            setLoading(true)
        } catch (err) {
            setError(err)
            setLoading(false)
            
        }        
    }
    
    useEffect(()=>{
        fetchFunc()
    }, [])

    return {error, loading, data}
}

export default useFetch