import React from 'react'
import Navegador from '../Components/Navegador';
import Sliderbar from '../Components/Sliderbar';
import Table from '../Components/Table';
import Buscador from '../Components/Buscador';

const Categoria = () => {

    const columnasCategorias = ['ID_Categoria', 'Nombre', 'Descripción'];
    const dataCategorias = [
        { ID_Categoria: 1, Nombre: 'Pizza', Descripción: 'Pizzas de diferentes tipos' },
        { ID_Categoria: 2, Nombre: 'Sushi', Descripción: 'Variedad de sushi' },
        { ID_Categoria: 3, Nombre: 'Tacos', Descripción: 'Tacos tradicionales' },
        { ID_Categoria: 4, Nombre: 'Ensaladas', Descripción: 'Ensaladas frescas y saludables' },
        { ID_Categoria: 5, Nombre: 'Hamburguesas', Descripción: 'Hamburguesas clásicas y gourmet' }
    ];


    return (
        <div className=' h-[100vh] flex'>
            <Sliderbar/>
            <Navegador name="Categorias"/>
            <main className='border flex-1 overflow-y-auto mt-[40px] p-10'>
                <Buscador/>
                <Table columns={columnasCategorias} data={dataCategorias}/>
            </main>
        </div>
    )
}

export default Categoria
