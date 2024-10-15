import React from 'react'
import Sliderbar from '../Components/Sliderbar'
import Navegador from '../Components/Navegador'
import Table from '../Components/Table';
import Buscador from '../Components/Buscador';

const Empleados = () => {
    const columnasEmpleados = ['ID', 'Nombre', 'Puesto', 'Turno'];

    const data = [
        { ID: 1, Nombre: 'Juan Pérez', Puesto: 'Cocinero', Turno: 'Mañana' },
        { ID: 2, Nombre: 'María López', Puesto: 'Mesera', Turno: 'Tarde' },
        { ID: 3, Nombre: 'Carlos García', Puesto: 'Bartender', Turno: 'Noche' },
        { ID: 4, Nombre: 'Ana Martínez', Puesto: 'Recepcionista', Turno: 'Mañana' },
        { ID: 5, Nombre: 'Luis Fernández', Puesto: 'Administrador', Turno: 'Completo' }
    ];
    


    return (
        <div  className=' h-[100vh] flex'>
            <Sliderbar/>
            <Navegador name="Empleados"/>
            <main className='border flex-1 overflow-y-auto mt-[40px] p-10'>
                <Buscador/>
                <Table columns={columnasEmpleados} data={data} />
            </main>
        </div>
    )
}

export default Empleados
