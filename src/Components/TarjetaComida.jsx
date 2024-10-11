import React from 'react'

const TarjetaComida = ({nombre, precio, url}) => {
    return (
        <div className='flex gap-[10px] rounded-lg bg-slate-100'>
            <img src={url} alt="plato" className='rounded-lg w-[50%]'/>
            <div className='flex flex-col justify-evenly py-1 font-[800] text-[12px] w-full leading-none text-pretty pr-2'>
                <p>{nombre}</p>
                
                <span>S/.{precio}</span>

            </div>
        </div>
    )
}

export default TarjetaComida
