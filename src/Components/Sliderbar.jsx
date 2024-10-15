import React from 'react'
import { Link } from 'react-router-dom'

const Sliderbar = () => {
    return (
        <div className='h-[100vh] w-[270px] bg-[#08343F] rounded-r-[10px] z-50'>
            <div className='h-[10vh] flex justify-center items-center text-[#F9E3D6] text-[30px] font-[800] tracking-[5px] py-2 sticky top-0 bg-[#08343F] rounded-tr-[10px]'><span>LOGO</span></div>
            <div className=' h-[90vh] pl-7 pt-6 overflow-y-auto'>
                <div className=''>
                    <span className='text-gray-400 text-[15px] mb-3 block'>
                        NAVEGACIÓN
                    </span>
                    <nav className='text-[#F9E3D6] text-[18px]'>
                        <ul>
                            <Link to="/Home">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-tachometer-alt"></i><span>Dashboard</span>
                                </li>
                            </Link>
                            <Link to="/Mesas">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-chair"></i><span>Gestión de Mesas</span>
                                </li>
                            </Link>
                            <Link to="/Menu">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-utensils"></i><span>Menú</span>
                                </li>
                            </Link>
                            <Link to="/Pedidos">
                                <li className='py-3  flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-concierge-bell"></i><span>Pedidos</span>
                                </li>
                            </Link>
                            <Link to="/Pagos">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-cash-register"></i><span>Pagos</span>
                                </li>
                            </Link>
                            <Link to="/Empleados">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-users"></i><span>Empleados</span>
                                </li>
                            </Link>
                            <Link to="/Categorias">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-list"></i><span>Categorias</span>
                                </li>
                            </Link>
                            <Link to="/Usuarios">
                                <li className='py-3 flex items-center gap-3 hover:text-[#fdf4ef] cursor-pointer'>
                                    <i className="fas fa-user-friends"></i><span>Usuarios</span>
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sliderbar
