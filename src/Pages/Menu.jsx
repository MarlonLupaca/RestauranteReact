import React from 'react'
import Sliderbar from '../Components/Sliderbar'
import Navegador from '../Components/Navegador'
import Table from '../Components/Table';
import Buscador from '../Components/Buscador';

const Menu = () => {
    const columnasMenu = ['ID', 'Nombre', 'Categoría', 'Precio'];
    const data = [
        { ID: 1, Nombre: 'Pizza Margherita', Categoría: 'Pizza', Precio: 8.99 },
        { ID: 2, Nombre: 'Sushi Nigiri', Categoría: 'Sushi', Precio: 12.50 },
        { ID: 3, Nombre: 'Tacos al Pastor', Categoría: 'Tacos', Precio: 7.00 },
        { ID: 4, Nombre: 'Ensalada César', Categoría: 'Ensaladas', Precio: 6.50 },
        { ID: 5, Nombre: 'Hamburguesa Clásica', Categoría: 'Hamburguesas', Precio: 10.00 }
    ];
    

    return (
        <div className=' h-[100vh] flex'>
            <Sliderbar/>
            <Navegador name="Menú"/>
            <main className='border flex-1 overflow-y-auto mt-[40px] p-10'>
                <Buscador/>
                <Table columns={columnasMenu} data={data}/>
            </main>
        </div>
    )
}

export default Menu
