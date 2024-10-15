import React from 'react'
import ViewVenta from './ViewVenta'

const Modal = ({TogleEstado}) => {
    return (
        <section className='w-full h-[100vh] bg-[rgba(0,0,0,0.71)] fixed z-50 flex justify-center items-center'>
            <div className='text-[#E3E2E0] w-[1200px] h-[620px] bg-[#E3E2E0] rounded-xl relative flex' >
                <button className=' absolute top-0 right-0 h-[30px] w-[30px] text-[18px] font-[600] z-50' onClick={() => {TogleEstado()}}>
                    X
                </button>
                <ViewVenta/>
            </div>
        </section>
    )
}

export default Modal
