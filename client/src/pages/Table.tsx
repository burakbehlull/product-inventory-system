import React from 'react'

import { useDispatch } from 'react-redux'
import {setId} from '../store/slices/keepSlices'

import {TableType} from '../types/ITypes'
import {AppDispatch} from '../store/store'

const Table:React.FC<TableType> = ({data}) => {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ÜRÜN ADI</th>
                        <th>ADET</th>
                        <th>FİYAT</th>
                        <th>BİRİM</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item:any) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.productName}</td>
                            <td>{item.piece}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.total}</td>
                            <td> <button onClick={()=>dispatch(setId(item.id))}>seç</button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table