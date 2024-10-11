import React, { useState } from 'react'
import Sliderbar from '../Components/Sliderbar'
import Navegador from '../Components/Navegador'
import Mesa from '../Components/Mesa'
import Modal from '../mod/Modal'


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
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="1"/>
                <Mesa TogleEstado={TogleEstado} estado="Ocupado" mesa="2"/>
                <Mesa TogleEstado={TogleEstado} estado="Reservado" mesa="3"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="5"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="6"/>
                <Mesa TogleEstado={TogleEstado} estado="Ocupado" mesa="7"/>
                <Mesa TogleEstado={TogleEstado} estado="Reservado" mesa="8"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="9"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="10"/>
                <Mesa TogleEstado={TogleEstado} estado="Ocupado" mesa="11"/>
                <Mesa TogleEstado={TogleEstado} estado="Ocupado" mesa="12"/>
                <Mesa TogleEstado={TogleEstado} estado="Ocupado" mesa="13"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="14"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="15"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="16"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="16"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="16"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="16"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="16"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="16"/>
                <Mesa TogleEstado={TogleEstado} estado="Libre" mesa="16"/>
            </main>

            {ModEstado && (
                <Modal TogleEstado={TogleEstado}/>
            )}
            
        </div>

    )
}

export default Home
