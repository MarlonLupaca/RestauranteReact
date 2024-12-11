import React from 'react'

const TarjetaComida = ({nombre, precio, url, categoria}) => {
    return (
        <div className='flex flex-col  w-[200px] h-fit cursor-pointer  rounded-lg bg-[#08343F] px-4 pt-2 pb-4 text-[#F9E3D6]'>
            <p className='mb-1 overflow-hidden text-ellipsis whitespace-nowrap'>{categoria}</p>
            <img src={url} alt="plato" className='rounded-lg w-full mb-4'/>
            <div className='flex flex-col gap-2  font-[500] text-[12px] w-full leading-none text-pretty text-center'>
                <p>{nombre}</p>
                <span>S/.{precio}</span>

            </div>
        </div>
    )
}

export default TarjetaComida
