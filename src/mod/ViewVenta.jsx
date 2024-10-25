import React, { useState } from 'react'
import ChosseCategoria from '../Components/ChosseCategoria'
import ChosseMenu from '../Components/ChosseMenu'
import SeccionOrden from '../Components/SeccionOrden'
import TarjetaComida from '../Components/TarjetaComida'

const ViewVenta = () => {
    
    const [estadoBoton, setestadoBoton] = useState(false);
    
    const handbuton = ()=> {
        setestadoBoton(!estadoBoton)
    }
    
    return (
        <>
            <div className='bg-[#E3E2E0] w-[70%] flex flex-col pb-[40px]'>
                <header className=' border-black w-[102%] bg-[#08343F] h-[60px] rounded-bl-lg p-3 pr-10 pl-[68px] flex justify-between items-center text-[#F9E3D6]'>
                    <span className='font-[800]'>
                        Martes, 15 Oct 2024
                    </span>
                    <div className='relative'>
                        <div className='absolute flex h-full justify-center items-center left-[10px]'>
                            <i className="fa-solid fa-magnifying-glass text-[15px] opacity-70 mb-[1px]"></i>
                        </div>
                        
                        <input type="text" placeholder='Ingresa alguna plato...' className='quitar_outline bg-[rgba(83,99,120,0.6)] rounded-[4px] h-[35px] px-2 pl-8 w-[300px] '/>
                    </div>
                    
                    

                </header>
                <section className='flex flex-col'>
                    <div className='pl-[68px] pr-[71px] py-2 flex justify-between items-center'>
                        <span className='block text-[#08343F] text-[30px] font-[800]'>Menu del dia</span>
                        <div className='relative'>
                            <button onClick={()=>{ handbuton()}} className=" px-3 py-[6PX] bg-[#08343F] text-[#F9E3D6] font-[400] text-[15px] rounded-lg">
                                <span className='mr-1'>Categorias</span> <i className="fa-solid fa-chevron-up rotate-180 text-[12px]"></i>
                            </button>
                            {
                                estadoBoton && <div className='absolute top-[105%] w-max'>
                                <ul className='bg-[#08343F] text-[#F9E3D6] font-[400] flex flex-col gap-[4px] text-[15px] pl-3 pr-4 py-2 rounded-lg w-fit hover:[&>li]:bg-[#10495A] hover:[&>li]:cursor-pointer'>
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
                    
                    
                    <div className='border flex flex-wrap  gap-y-[30px] gap-x-[50px] justify-center overflow-y-auto h-[470px]'>
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
                    
                </section>
                
            </div>
            
            <SeccionOrden/>
        </>
    )
}

export default ViewVenta
