import React, { useState, useEffect } from 'react';

const ViewVenta = () => {
    const [estadoBoton, setEstadoBoton] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [menu, setMenu] = useState([]);
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [selectedCategoria, setSelectedCategoria] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [orden, setOrden] = useState([]);
    const [total, setTotal] = useState(0);
    const [descuento, setDescuento] = useState(0);

    const handleButton = () => setEstadoBoton(!estadoBoton);

    useEffect(() => {
        fetch('http://localhost:8081/RestauranteBackend/categoria')
            .then(response => response.json())
            .then(data => setCategorias(data.Categorias || []))
            .catch(err => console.error('Error fetching categories:', err));

        fetch('http://localhost:8081/RestauranteBackend/menu')
            .then(response => response.json())
            .then(data => {
                const menuItems = data.Menu || [];
                setMenu(menuItems);
                setFilteredMenu(menuItems); 
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error fetching menu:', err);
                setIsLoading(false);
            });
    }, []);

    const handleCategoriaClick = (categoria) => {
        setSelectedCategoria(categoria);
        if (categoria) {
            setFilteredMenu(menu.filter(item => item.categoria === categoria));
        } else {
            setFilteredMenu(menu);
        }
        setEstadoBoton(false);
    };

    const handleAddToOrden = (item) => {
        setOrden((prevOrden) => {
          const index = prevOrden.findIndex((pedido) => pedido.id === item.id);
      
          if (index >= 0) {
            const updatedOrden = prevOrden.map(pedido =>
              pedido.id === item.id ? { ...pedido, cantidad: pedido.cantidad + 1 } : pedido
            );
            return updatedOrden;
          } else {
            return [...prevOrden, { ...item, cantidad: 1, url: 'assets/Cat_pasta.jpg' }];
          }
        });
      };
      

    useEffect(() => {
        const nuevoTotal = orden.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
        setTotal(nuevoTotal);
        setDescuento(nuevoTotal > 100 ? nuevoTotal * 0.1 : 0);
    }, [orden]);

    const TarjetaComida = ({ categoria, nombre, precio, url, onClick }) => (
        <div className='flex flex-col  w-[200px] h-fit cursor-pointer hover:transform hover:scale-105 transition-all rounded-lg bg-[#08343F] px-4 pt-2 pb-4 text-[#F9E3D6]' onClick={onClick}>
            <p className='mb-1 overflow-hidden text-ellipsis whitespace-nowrap'>{categoria}</p>
            <img src={url} alt={nombre} className='mb-1 overflow-hidden text-ellipsis whitespace-nowrap' />
            <div className='flex flex-col gap-2  font-[500] text-[12px] w-full leading-none text-pretty text-center'>
                <p>{nombre}</p>
                <span>S/.{precio}</span>

            </div>
        </div>
    );

    const TarjetaDePedido = ({ item }) => (
        <div className='flex justify-between items-center mb-2'>
            <div className='flex items-center gap-4'>
                <img src="assets/Cat_carne.jpg" alt={item.nombre} className='h-12 rounded-lg' />
                <div className='flex flex-col'>
                    <p className='font-bold'>{item.nombre}</p>
                    <span>Cantidad: {item.cantidad}</span>
                </div>
            </div>
            <span className='font-bold'>S/.{(item.precio * item.cantidad).toFixed(2)}</span>
        </div>
    );

    return (
        <>
            <div className='bg-[#E3E2E0] w-[70%] flex flex-col pb-[40px]'>
                <header className='border-black w-[102%] bg-[#08343F] h-[60px] rounded-bl-lg p-3 pr-10 pl-[68px] flex justify-between items-center text-[#F9E3D6]'>
                    <span className='font-[800]'>Martes, 15 Oct 2024</span>
                    <div className='relative'>
                        <div className='absolute flex h-full justify-center items-center left-[10px]'>
                            <i className="fa-solid fa-magnifying-glass text-[15px] opacity-70 mb-[1px]"></i>
                        </div>
                        <input
                            type="text"
                            placeholder='Ingresa algún plato...'
                            className='quitar_outline bg-[rgba(83,99,120,0.6)] rounded-[4px] h-[35px] px-2 pl-8 large-input'
                        />
                    </div>
                </header>

                <section className='flex flex-col'>
                    <div className='pl-[68px] pr-[71px] py-2 flex justify-between items-center'>
                        <span className='block text-[#08343F] text-[30px] font-[800]'>Menú del día</span>
                        <div className='relative'>
                            <button
                                onClick={handleButton}
                                className="px-3 py-[6px] bg-[#08343F] text-[#F9E3D6] font-[400] text-[15px] rounded-lg"
                                aria-expanded={estadoBoton}
                            >
                                <span className='mr-1'>Categorías</span>
                                <i className={`fa-solid fa-chevron-up ${estadoBoton ? '' : 'rotate-180'} text-[12px]`}></i>
                            </button>
                            {estadoBoton && (
                                <div className='absolute top-[105%]'>
                                    <ul className='bg-[#08343F] text-[#F9E3D6] font-[400] flex flex-col gap-[4px] text-[15px] pl-3 pr-4 py-2 rounded-lg w-fit'>
                                        <li
                                            key="all"
                                            className="truncate w-[200px] cursor-pointer"
                                            onClick={() => handleCategoriaClick(null)}
                                        >
                                            Todas las categorías
                                        </li>
                                        {isLoading ? (
                                            <li>Cargando...</li>
                                        ) : categorias.length ? (
                                            categorias.map(categoria => (
                                                <li
                                                    key={categoria.id}
                                                    className="truncate w-[200px] cursor-pointer"
                                                    onClick={() => handleCategoriaClick(categoria.nombre)}
                                                >
                                                    {categoria.nombre}
                                                </li>
                                            ))
                                        ) : (
                                            <li>No hay categorías</li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='py-2 border flex flex-wrap gap-y-[30px] gap-x-[50px] justify-center overflow-y-auto h-[470px]'>
                        {filteredMenu.length ? (
                            filteredMenu.map(item => (
                                <TarjetaComida
                                    key={item.id}
                                    categoria={item.categoria}
                                    nombre={item.nombre}
                                    precio={item.precio.toFixed(2)}
                                    url="assets/Cat_pasta.jpg"
                                    onClick={() => handleAddToOrden(item)}
                                />
                            ))
                        ) : (
                            <p>No hay productos disponibles en esta categoría</p>
                        )}
                    </div>
                </section>
            </div>

            <div className='w-[30%] bg-[#08343F] rounded-lg flex flex-col py-4 text-[#F9E3D6] pb-6'>
                <span className='px-5 font-[700] text-[17px] block mb-3'>Pedido #32562</span>
                <div className='px-5 flex justify-between border-b pb-2 text-[14px]'>
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
                    <div className='flex justify-between px-6'>
                        <span>Descuento: </span>
                        <span>S/.{descuento.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between px-6'>
                        <span>Total: </span>
                        <span>S/.{(total - descuento).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewVenta;

