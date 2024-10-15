import React from 'react'
import Sliderbar from '../Components/Sliderbar'
import Navegador from '../Components/Navegador'
import Table from '../Components/Table';
import Buscador from '../Components/Buscador';

const Mesas = () => {
    const columnasGestionMesas = ['ID', 'Número', 'Capacidad', 'Estado'];

    const data = [
        { ID: 1, Número: 'Mesa 1', Capacidad: 4, Estado: 'Disponible' },
        { ID: 2, Número: 'Mesa 2', Capacidad: 2, Estado: 'Ocupada' },
        { ID: 3, Número: 'Mesa 3', Capacidad: 6, Estado: 'Reservada' },
        { ID: 4, Número: 'Mesa 4', Capacidad: 4, Estado: 'Disponible' },
        { ID: 5, Número: 'Mesa 5', Capacidad: 8, Estado: 'Ocupada' }
    ];

    return (
        <div className=' h-[100vh] flex'>
            <Sliderbar/>
            <Navegador name="Gestión de Mesas"/>
            <main className='border flex-1 overflow-y-auto mt-[40px] p-10'>
                <Buscador/>
                <Table columns={columnasGestionMesas} data={data} />
            </main>
        </div>
    )
}

export default Mesas
