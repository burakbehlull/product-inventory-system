import React from 'react'

interface TableType {
    data: object | any
}
const Table:React.FC<TableType> = ({data}) => {
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table