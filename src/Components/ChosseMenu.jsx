import React, { useState } from 'react'
import TarjetaComida from './TarjetaComida'

const ChosseMenu = () => {
    const [estadoBoton, setestadoBoton] = useState(false)
    
    const handbuton = ()=> {
        setestadoBoton(!estadoBoton)
    }

    return (
        <div className='text-black w-[300px] flex flex-col border-black px-4'>
            <div className='border py-3'>
                <div className='relative'>
                    <button onClick={()=>{ handbuton()}} className=" px-3 py-[6PX] bg-[#08343F] text-[#F9E3D6] font-[400] text-[15px] rounded-lg">
                        <span className='mr-1'>Categorias</span> <i className="fa-solid fa-chevron-up rotate-180 text-[12px]"></i>
                    </button>
                    {
                        estadoBoton && <div className='absolute top-[105%]'>
                        <ul className='bg-[#08343F] text-[#F9E3D6] font-[400] flex flex-col gap-[4px] text-[15px] pl-3 pr-4 py-2 rounded-lg w-fit'>
                            <li>Entradas</li>
                            <li>Platos principales</li>
                            <li>Postres</li>
                            <li>Bebidas</li>
                            <li>Aperitivos</li>
                            <li>Ensaladas</li>
                            <li>Sopas</li>
                            <li>Sándwiches</li>
                            <li>Mariscos</li>
                            <li>Platos vegetarianos</li>
                            <li>Pastas</li>
                            <li>Comida rápida</li>
                        </ul>
    
                        </div>
                    }
                    
                </div>
                
            </div>
            <div className='flex flex-col gap-3 overflow-y-auto border h-[400px]'>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_pasta.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_bebida.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_carne.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_ensaladas.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_mariscos.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_pasta.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_bebida.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_carne.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_ensaladas.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_mariscos.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_pasta.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_bebida.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_carne.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_ensaladas.jpg"/>
                <TarjetaComida nombre="Pasta basica con albondigas" precio="50.00" url="assets/Cat_mariscos.jpg"/>
            </div>
        </div>
    )
}

export default ChosseMenu
