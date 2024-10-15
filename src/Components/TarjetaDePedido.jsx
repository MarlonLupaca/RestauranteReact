import React from 'react'

const TarjetaDePedido = () => {
    return (
        <div className='w-full grid_pedido'>
            <div className='h-[40px] flex justify-between pr-4 mb-1'>
                <div className='flex gap-3'>
                    <img src="assets/Cat_carne.jpg" alt="Plato" className='h-full rounded-lg'/>
                    <div className='flex flex-col justify-center font-[600] text-[12px] w-[140px] pr-4'>
                        <p className='elemento'>Tallarin de pastas que tienes dos contenido de </p>
                        <span>S/.12</span>
                    </div>
                </div>
                <div>
                    <input type="number" placeholder="1" className='quitar_outline bg-[rgba(83,99,120,0.6)] rounded-[4px] text-[12px] text-center h-[35px] w-[40px] px-2'/>
                </div>
            </div>
            <div className=' mb-1 text-[14px] flex justify-center items-center'>S/.20</div>
            <div className='flex items-center text-[12px] pr-4'>
                <input type="text" placeholder='Ingresa alguna nota...' className='quitar_outline bg-[rgba(83,99,120,0.6)] rounded-[4px] h-[35px] px-2 w-full'/>
            </div>
            <div className='flex justify-center items-center py-[4px]'>
                <button className='flex justify-center h-[35px] w-[35px] items-center p-2 rounded-lg opacity-95 text-gray-200 border-2 border-gray-200 text-[12px]'>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
            
        </div>
    )
}

export default TarjetaDePedido
