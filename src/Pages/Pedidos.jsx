import React from 'react'
import Sliderbar from '../Components/Sliderbar'
import Navegador from '../Components/Navegador'
import Table from '../Components/Table'

const Pedidos = () => {
    const columnasPedidos = ['ID', 'Mesa', 'Items', 'Estado', 'Fecha'];

    const data = [
        { ID: 1, Mesa: 5, Items: 'Pizza Margherita, Ensalada César', Estado: 'En preparación', Fecha: '2024-09-10' },
        { ID: 2, Mesa: 3, Items: 'Tacos al Pastor, Soda', Estado: 'Servido', Fecha: '2024-09-10' },
        { ID: 3, Mesa: 7, Items: 'Sushi Nigiri, Agua Mineral', Estado: 'En preparación', Fecha: '2024-09-10' },
        { ID: 4, Mesa: 1, Items: 'Hamburguesa Clásica, Papas Fritas', Estado: 'Servido', Fecha: '2024-09-10' },
        { ID: 5, Mesa: 8, Items: 'Pizza Margherita', Estado: 'Pendiente', Fecha: '2024-09-10' }
    ];

    return (
        <div className=' h-[100vh] flex'>
            <Sliderbar/>
            <Navegador name="Pedidos"/>
            <main className='border flex-1 overflow-y-auto mt-[70px] p-10'>
                <Table columns={columnasPedidos} data={data}/>
            </main>
        </div>
    )
}

export default Pedidos
