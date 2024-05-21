import React from 'react'

let data = [
    {id: 1, productName: "Monstar PC", piece: 5040000, unitPrice: 1000, total:120},
    {id: 2, productName: "Acer PC", piece: 5200000, unitPrice: 4000, total:120},
    {id: 3, productName: "HP PC", piece: 5000700, unitPrice: 3000, total:120},
    {id: 4, productName: "Casper PC", piece: 5100000, unitPrice: 5000, total:40},
    {id: 5, productName: "Leonvo PC", piece: 5020000, unitPrice: 5000, total:80},
    {id: 6, productName: "Macbook PC", piece: 5000000, unitPrice: 1000, total:50},
    {id: 7, productName: "Airpods", piece: 2500000, unitPrice: 4500, total:50},
    {id: 8, productName: "Monstar PC", piece: 9000000, unitPrice: 1500, total:20},
    {id: 9, productName: "Pod", piece: 50000, unitPrice: 500, total:120},
]
const Table:React.FC= () => {
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
                    {data.map((item) => (
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