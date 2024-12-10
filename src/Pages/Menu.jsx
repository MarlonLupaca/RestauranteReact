import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sliderbar from '../Components/Sliderbar';
import Navegador from '../Components/Navegador';
import Buscador from '../Components/Buscador';

const Menu = () => {
    const columnasMenu = ['ID', 'Nombre', 'Categoría', 'Precio', 'Acciones'];
    const [menu, setMenu] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(''); // 'edit' o 'add'
    const [selectedItem, setSelectedItem] = useState(null); // Elemento seleccionado
    const [newItem, setNewItem] = useState({ nombre: '', categoria: '', precio: 0 }); // Nuevo producto

    // Cargar datos del menú desde la API
    useEffect(() => {
        axios.get('http://localhost:8081/RestauranteBackend/menu')
            .then(response => {
                if (response.data && response.data.Menu) {
                    setMenu(response.data.Menu);
                }
            })
            .catch(error => console.error('Error al obtener el menú:', error));
    }, []);

    const handleEdit = (item) => {
        setSelectedItem(item);
        setNewItem({ nombre: item.nombre, categoria: item.categoria, precio: item.precio }); // Precarga el formulario
        setModalType('edit');
        setShowModal(true);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/RestauranteBackend/menu?id=${id}`)
            .then(() => {
                // Filtrar el producto eliminado del menú actual
                setMenu(menu.filter(item => item.id !== id));
            })
            .catch(error => console.error('Error al eliminar el producto:', error));
    };

    const handleAdd = () => {
        setModalType('add');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setNewItem({ nombre: '', categoria: '', precio: 0 }); // Limpiar formulario
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSaveItem = () => {
        if (modalType === 'add') {
            // Agregar nuevo producto
            axios.post('http://localhost:8081/RestauranteBackend/menu', newItem)
                .then(response => {
                    if (response.data && response.data.Menu) {
                        setMenu([...menu, {
                            id: response.data.Menu.id,
                            nombre: response.data.Menu.nombre,
                            categoria: response.data.Menu.categoria,
                            precio: response.data.Menu.precio,
                        }]);
                    }
                    handleCloseModal();
                })
                .catch(error => console.error('Error al agregar el producto:', error));
        } else if (modalType === 'edit' && selectedItem) {
            // Editar producto existente
            axios.put('http://localhost:8081/RestauranteBackend/menu', {
                id: selectedItem.id,
                ...newItem,
            })
                .then(response => {
                    const updatedMenu = menu.map(item =>
                        item.id === selectedItem.id
                            ? { ...item, ...newItem }
                            : item
                    );
                    setMenu(updatedMenu);
                    handleCloseModal();
                })
                .catch(error => console.error('Error al actualizar el producto:', error));
        }
    };

    return (
        <div className='h-[100vh] flex'>
            <Sliderbar />
            <Navegador name="Menú" />
            <main className='border flex-1 overflow-y-auto mt-[40px] p-10'>
                <Buscador />
                <button
                    onClick={handleAdd}
                    className='bg-[#08343F] text-[#F9E3D6] font-[700] w-[200px] p-2 rounded-[8px] mb-4'
                >
                    Agregar Producto
                </button>
                <table className="table-auto w-full text-center bg-[#F8F9FA] rounded-md shadow-md">
                    <thead className="bg-[#08343F] text-white uppercase text-sm">
                        <tr>
                            {columnasMenu.map((columna, index) => (
                                <th key={index} className="border-b p-3">{columna}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item) => (
                            <tr key={item.id} className="hover:bg-[#F1F1F1]">
                                <td className="border-b p-3">{item.id}</td>
                                <td className="border-b p-3">{item.nombre}</td>
                                <td className="border-b p-3">{item.categoria}</td>
                                <td className="border-b p-3">S/.{item.precio}</td>
                                <td className="border-b p-3">
                                    <button
                                        onClick={() => handleEdit(item)}
                                        className="bg-blue-500 text-white px-4 py-1 rounded-[8px] mr-2 hover:bg-blue-600"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded-[8px] hover:bg-red-600"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-10">
                        <div className="bg-white p-6 rounded-md w-[400px] shadow-md">
                            <h2 className="text-xl mb-4">{modalType === 'add' ? 'Agregar Producto' : 'Editar Producto'}</h2>
                            <input
                                type="text"
                                name="nombre"
                                value={newItem.nombre}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Nombre"
                            />
                            <input
                                type="text"
                                name="categoria"
                                value={newItem.categoria}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Categoría"
                            />
                            <input
                                type="number"
                                name="precio"
                                value={newItem.precio}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Precio"
                            />
                            <div className="flex justify-between">
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-[8px]"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSaveItem}
                                    className="bg-green-500 text-white px-4 py-2 rounded-[8px]"
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Menu;
