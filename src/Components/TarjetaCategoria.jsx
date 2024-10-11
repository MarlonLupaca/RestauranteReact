import React from 'react'

const TarjetaCategoria = ({url,name}) => {
    return (

        <div className='w-full p-2'>
            <span className='text-[17px] font-[800]'>{name}</span>
            <img src={url} alt={name} className='rounded-lg cursor-pointer'/>
        </div>
    )
}

export default TarjetaCategoria
