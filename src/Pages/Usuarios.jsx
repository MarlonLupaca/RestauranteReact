import React from 'react'
import Sliderbar from '../Components/Sliderbar';
import Navegador from '../Components/Navegador';
import Table from '../Components/Table';
import Buscador from '../Components/Buscador';

const Usuarios = () => {
    const columnasUsuarios = ['ID_Usuario', 'Nombre_Usuario', 'Contraseña'];
    const dataUsuarios = [
        { ID_Usuario: 1, Nombre_Usuario: 'jdoe', Contraseña: 'password123' },
        { ID_Usuario: 2, Nombre_Usuario: 'asmith', Contraseña: 'pass456' },
        { ID_Usuario: 3, Nombre_Usuario: 'mjones', Contraseña: 'myPass789' },
        { ID_Usuario: 4, Nombre_Usuario: 'lbrown', Contraseña: 'brownie12' },
        { ID_Usuario: 5, Nombre_Usuario: 'tjackson', Contraseña: 'jacky456' }
    ];


    return (
        <div className=' h-[100vh] flex'>
            <Sliderbar/>
            <Navegador name="Usuarios"/>
            <main className='border flex-1 overflow-y-auto mt-[40px] p-10'>
                <Buscador/>
                <Table columns={columnasUsuarios} data={dataUsuarios}/>
            </main>
        </div>
    )
}

export default Usuarios
