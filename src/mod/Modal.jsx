import React from 'react'
import ViewVenta from './ViewVenta'

const Modal = ({TogleEstado}) => {
    return (
        <section className='w-full h-[100vh] bg-[rgba(0,0,0,0.4)] fixed z-50 flex justify-center items-center '>
            <div className='text-[#E3E2E0] w-[1200px] h-[620px] bg-white rounded-xl relative flex' >
                <button className=' absolute bottom-0 right-0 bg-green-400 p-3 rounded-xl' onClick={() => {TogleEstado()}}>
                    cerrar
                </button>
                <ViewVenta/>
            </div>
        </section>
    )
}

export default Modal
