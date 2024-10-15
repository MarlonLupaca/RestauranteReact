import React from 'react'

const Buscador = () => {
    return (
        <div className='relative my-4'>
            <div className='absolute flex h-full justify-center items-center left-[10px]'>
                <i className="fa-solid fa-magnifying-glass text-[15px] opacity-70 mb-[1px]"></i>
            </div>
            
            <input type="text" placeholder='Ingresa alguna dato...' className='quitar_outline rounded-[4px] h-[35px] px-2 pl-8 w-[300px] '/>
        </div>
    )
}

export default Buscador
