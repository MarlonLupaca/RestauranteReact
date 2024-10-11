import React from 'react'
import Sliderbar from '../Components/Sliderbar'
import Navegador from '../Components/Navegador'
import Table from '../Components/Table'

const Pagos = () => {
    const columnasPagos = ['ID', 'ID_Pedido', 'Monto', 'Método'];
    const data = [
        { ID: 1, ID_Pedido: 101, Monto: 150.00, Método: 'Tarjeta de Crédito' },
        { ID: 2, ID_Pedido: 102, Monto: 85.50, Método: 'Efectivo' },
        { ID: 3, ID_Pedido: 103, Monto: 200.75, Método: 'Tarjeta de Débito' },
        { ID: 4, ID_Pedido: 104, Monto: 120.00, Método: 'Transferencia Bancaria' },
        { ID: 5, ID_Pedido: 105, Monto: 95.00, Método: 'Tarjeta de Crédito' }
    ];
    

    return (
        <div  className=' h-[100vh] flex'>
            <Sliderbar/>
            <Navegador name="Pagos"/>
            <main className='border flex-1 overflow-y-auto mt-[70px] p-10'>
                <Table columns={columnasPagos} data={data} />
            </main>
        </div>
    )
}

export default Pagos
