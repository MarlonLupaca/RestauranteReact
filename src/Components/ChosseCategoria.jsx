import React from 'react'
import TarjetaCategoria from './TarjetaCategoria'

const ChosseCategoria = () => {
    return (
        <div className='text-black w-[180px] m-1'>
            <div className='flex flex-col w-[180px] border-b-2 px-3 py-3 text-[14px] gap-1'>
                <label htmlFor='categoria' className='font-[600]'>Categoria</label>
                <input className="input_none border-2 w-[150px] border-gray-300 focus:border-[#08343F] px-2 py-1 rounded-lg" type="text" placeholder="Ejem. Bebidas" name="categoria" id="categoria" />
            </div>
            <div className='h-[450px] overflow-y-auto py-1'>
                <TarjetaCategoria url="assets/Cat_carne.jpg" name="Carnes" />
                <TarjetaCategoria url="assets/Cat_ensaladas.jpg" name="Ensaladas" />
                <TarjetaCategoria url="assets/Cat_mariscos.jpg" name="Mariscos" />
                <TarjetaCategoria url="assets/Cat_pasta.jpg" name="Pastas" />
                <TarjetaCategoria url="assets/Cat_bebida.jpg" name="Bebidas" />
                <TarjetaCategoria url="assets/Cat_carne.jpg" name="Carnes" />
                <TarjetaCategoria url="assets/Cat_ensaladas.jpg" name="Ensaladas" />
                <TarjetaCategoria url="assets/Cat_mariscos.jpg" name="Mariscos" />
                <TarjetaCategoria url="assets/Cat_pasta.jpg" name="Pastas" />
                <TarjetaCategoria url="assets/Cat_bebida.jpg" name="Bebidas" />

            </div>
        </div>
    )
}

export default ChosseCategoria
