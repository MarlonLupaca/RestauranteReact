import React, { useEffect, useState } from 'react';

const Mesa = ({ estado, mesa, TogleEstado }) => {
    const [color, setColor] = useState("");
    const [estado2, setestado2] = useState(estado);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenuColor = (EstadoCambiado) => {
        setIsOpen(!isOpen);
        setestado2(EstadoCambiado);
    };

    useEffect(() => {
        switch (estado2) {
            case "Libre":
                setColor("#34D399"); // Verde
                break;
            case "Ocupado":
                setColor("#DC2626"); // Rojo
                break;
            case "Reservado":
                setColor("#F59E0B"); // Amarillo
                break;
            default:
                setColor("#9CA3AF"); // Gris por defecto
                break;
        }
    }, [estado2]); // Solo se ejecuta cuando `estado2` cambia

    

    return (
        <div className="w-[134px] h-[134px] flex items-center justify-center text-white font-bold rounded-lg relative text-[15px]"  style={{ background: color, userSelect: 'none' }}>
            <span className='absolute top-0 left-[10px] h-9 w-7 flex justify-center items-center bg-[#08343F] rounded-b-full text-[14px] font-[800]'>
                {mesa}
            </span>
            <div className='relative'>
                <span onClick={()=>{toggleMenu()}} className='cursor-pointer flex items-center gap-[6px] hover:bg-[rgba(0,0,0,0.2)] py-2 px-3 rounded-lg'>
                    {estado2} <i className="fa-solid fa-chevron-up rotate-180 text-[12px]"></i>
                </span>
                
                {/* Menú desplegable */}
                {isOpen && (
                    <div className="cursor-pointer absolute right-[-105px] top-0 bg-[#08343F] w-[105px] text-[#F9E3D6] font-[400] text-[15px] py-2 px-2 rounded-lg">
                        <ul className='flex flex-col gap-1'>
                            <li onClick={() => toggleMenuColor("Libre")} className='hover:bg-[rgba(255,255,255,0.2)] rounded-lg py-1 px-2'>Libre</li>
                            <li onClick={() => toggleMenuColor("Ocupado")} className='hover:bg-[rgba(255,255,255,0.2)] rounded-lg py-1 px-2'>Ocupado</li>
                            <li onClick={() => toggleMenuColor("Reservado")} className='hover:bg-[rgba(255,255,255,0.2)] rounded-lg py-1 px-2'>Reservado</li>

                        </ul>
                    </div>
                )}
            </div>
            
            <button onClick={()=>{TogleEstado()}}>
                <i className="fas fa-file-alt text-[20px] absolute top-[2px] right-1 p-2 hover:bg-[rgba(0,0,0,0.2)] rounded-lg"></i>
            </button>
            
            
        </div>
    );
}

export default Mesa;
