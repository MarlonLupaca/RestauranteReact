import React from 'react'

const TarjetaComida = ({nombre, precio, url}) => {
    return (
        <div className='flex flex-col  w-[200px] h-fit gap-[10px] rounded-lg bg-[#08343F] p-4 text-[#F9E3D6]'>
            <img src={url} alt="plato" className='rounded-lg w-full'/>
            <div className='flex flex-col gap-2  font-[500] text-[12px] w-full leading-none text-pretty text-center'>
                <p>{nombre}</p>
                <span>S/.{precio}</span>

            </div>
        </div>
    )
}

export default TarjetaComida
