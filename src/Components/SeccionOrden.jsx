import React from 'react';
import TarjetaDePedido from './TarjetaDePedido';

const SeccionOrden = ({ orden, total, descuento }) => {
    return (
        <div className='w-[30%] bg-[#08343F] rounded-lg flex flex-col py-4 text-[#F9E3D6] pb-6'>
            <span className='px-5 font-[700] text-[17px] block mb-3 opacity-95'>Pedido #32562</span>
            <div className='px-5 flex justify-between border-b pb-2 opacity-95 text-[14px]'>
                <span>Plato</span>
                <div className='w-[88px] flex justify-between'>
                    <span>Cat.</span>
                    <span>Precio</span>
                </div>
            </div>
            <div className='px-5 py-4 flex flex-col gap-2 overflow-y-auto'>
                {orden.map((item) => (
                    <TarjetaDePedido key={item.id} item={item} />
                ))}
            </div>
            <div className='text-[14px] flex flex-col gap-2 mt-3'>
                <div className='flex justify-between items-center px-6'>
                    <span>Descuento: </span>
                    <span>S/.{descuento.toFixed(2)}</span>
                </div>
                <div className='flex justify-between items-center px-6'>
                    <span>Total: </span>
                    <span>S/.{(total - descuento).toFixed(2)}</span>
                </div>
                <div className='flex justify-center gap-5 mt-3'>
                    <button className='border px-3 py-1 rounded-lg border-[#F9E3D6]'>
                        Guardar
                    </button>
                    <button className='border px-3 py-1 rounded-lg border-[#F9E3D6]'>
                        Pagar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeccionOrden;
