import React from 'react'
import { Link } from 'react-router-dom'

const Navegador = ({name}) => {
    return (
        <div className='absolute w-full h-[70px] bg-[#08343F] pl-[270px]  flex justify-between items-center text-[#F9E3D6]'>
            <div className='px-4 text-[20px] font-[800]'>
                {name}
            </div>
            <div className='flex items-center h-full gap-6'>
                <i className="fas fa-cog text-[22px]"></i>
                <Link to="/" className='flex justify-center items-center'>
                    <i className="fas fa-sign-out-alt text-[22px]"></i>
                </Link>
                <div className='h-full w-[220px] flex items-center justify-center gap-3 bg-[rgba(10,158,176,0.4)] rounded-l-[20px]'>
                    <img src="assets/perfil.png" alt="perfil" className='h-[50px] rounded-full'/>
                    <div>   
                        <span className='block font-[800] text-[15px]'>Nombre Usuario</span>
                        <span className='block text-[13px]'>Apellido Usuario</span>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Navegador
