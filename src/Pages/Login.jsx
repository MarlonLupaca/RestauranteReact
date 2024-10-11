import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className=' h-[100vh] flex justify-center items-center fondo'>
            <div className='flex h-[550px] w-[1000px] bg-[#E3E2E0] rounded-[20px] opacity-[0.85]'>
                
                <div className='w-[50%] flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-[#08343F] font-[800] text-[60px] mb-4'>Restaurante</h1>
                    <form action="" className=' flex flex-col gap-3 items-center w-[350px]'>
                        <div className='flex flex-col gap-1 w-[300px]'>
                            <label htmlFor="usuario" className='text-[#08343F] font-[700]'>Usuario</label>
                            <input type="text" name="usuario" id="usuario" className='input_none px-3 py-1 rounded-[8px]' placeholder='Example'/>
                        </div>
                        <div className='flex flex-col gap-1 w-[300px]'>
                            <label htmlFor="pass" className='text-[#08343F] font-[700]'>Contraseña</label>
                            <input type="password" name="pass" id="pass" className='input_none px-3  py-1 rounded-[8px]'  placeholder='Password' />
                        </div>

                        <div className='flex flex-col gap-4 mt-6 '>
                            <Link to="/Home">
                                <button className='bg-[#08343F] text-[#F9E3D6]  border-[2px] border-[#F9E3D6]  font-[700] w-[300px] p-1 rounded-[8px]' type='button'> 
                                    Iniciar Sesión
                                </button>
                            </Link>
                            
                            <button className='bg-[#F9E3D6] text-[#08343F] border-[2px] border-[#08343F] font-[700] w-[300px] p-1 rounded-[8px]'>
                                Registrarse
                            </button>
                        </div>
                        
                    </form>                        
                        
                    
                </div>
                <div className='h-full'>
                    <img src="assets/Comidas.jpg" alt="Comidas" className='h-full rounded-r-[20px]'/>
                </div>
            </div>
        </div>
    )
}   

export default Login
