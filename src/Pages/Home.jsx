import React, { useState } from 'react'
import Sliderbar from '../Components/Sliderbar'
import Navegador from '../Components/Navegador'
import Mesa from '../Components/Mesa'
import Modal from '../mod/Modal'

import MESAS from '../Components/Consts/TmpMesas'

const Home = () => {
    const [ModEstado, setModEstado] = useState(false)

    const TogleEstado = () =>{
        setModEstado(!ModEstado)
    }

    return (
        <div className=' h-[100vh] flex'>
            <Sliderbar/>
            <Navegador name="Dashboard"/>
            <main className='flex-1 overflow-y-auto mt-[70px] custom_grid p-10 justify-items-center gap-10'>
                {MESAS.map((mesa) => {
                    return <Mesa key={1} TogleEstado={TogleEstado} estado={mesa.estado} mesa={mesa.numMesa}/>
                })}
            </main>

            {ModEstado && (
                <Modal TogleEstado={TogleEstado}/>
            )}
            
        </div>

    )
}

export default Home
