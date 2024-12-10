import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sliderbar from '../Components/Sliderbar';
import Navegador from '../Components/Navegador';
import Buscador from '../Components/Buscador';

const Categoria = () => {
    const columnasCategoria = ['ID', 'Nombre', 'Descripción', 'Acciones'];
    const [categorias, setCategorias] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(''); // 'edit' o 'add'
    const [selectedCategoria, setSelectedCategoria] = useState(null); // Categoría seleccionada
    const [newCategoria, setNewCategoria] = useState({ nombre: '', descripcion: '' }); // Nueva categoría

    // Cargar datos de categorías desde la API
    useEffect(() => {
        axios.get('http://localhost:8081/RestauranteBackend/categoria')
            .then(response => {
                if (response.data && response.data.Categorias) {
                    setCategorias(response.data.Categorias);
                }
            })
            .catch(error => console.error('Error al obtener las categorías:', error));
    }, [categorias]);

    const handleEdit = (categoria) => {
        setSelectedCategoria(categoria);
        setNewCategoria({ nombre: categoria.nombre, descripcion: categoria.descripcion }); // Precarga el formulario
        setModalType('edit');
        setShowModal(true);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/RestauranteBackend/categoria?id=${id}`)
            .then(() => {
                setCategorias(categorias.filter(cat => cat.id !== id));
            })
            .catch(error => console.error('Error al eliminar la categoría:', error));
    };

    const handleAdd = () => {
        setModalType('add');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setNewCategoria({ nombre: '', descripcion: '' }); // Limpiar formulario
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCategoria(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSaveCategoria = () => {
        if (modalType === 'add') {
            // Agregar nueva categoría
            axios.post('http://localhost:8081/RestauranteBackend/categoria', newCategoria)
                .then(response => {
                    if (response.data && response.data.Categorias) {
                        setCategorias([...categorias, response.data.Categorias]);
                    }
                    handleCloseModal();
                })
                .catch(error => console.error('Error al agregar la categoría:', error));
        } else if (modalType === 'edit' && selectedCategoria) {
            // Editar categoría existente
            axios.put('http://localhost:8081/RestauranteBackend/categoria', {
                id: selectedCategoria.id,
                ...newCategoria,
            })
                .then(() => {
                    const updatedCategorias = categorias.map(cat =>
                        cat.id === selectedCategoria.id
                            ? { ...cat, ...newCategoria }
                            : cat
                    );
                    setCategorias(updatedCategorias);
                    handleCloseModal();
                })
                .catch(error => console.error('Error al actualizar la categoría:', error));
        }
    };

    return (
        <div className='h-[100vh] flex'>
            <Sliderbar />
            <Navegador name="Categorías" />
            <main className='border flex-1 overflow-y-auto mt-[40px] p-10'>
                <Buscador />
                <button
                    onClick={handleAdd}
                    className='bg-[#08343F] text-[#F9E3D6] font-[700] w-[200px] p-2 rounded-[8px] mb-4'
                >
                    Agregar Categoría
                </button>
                <table className="table-auto w-full text-center bg-[#F8F9FA] rounded-md shadow-md">
                    <thead className="bg-[#08343F] text-white uppercase text-sm">
                        <tr>
                            {columnasCategoria.map((columna, index) => (
                                <th key={index} className="border-b p-3">{columna}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria) => (
                            <tr key={categoria.id} className="hover:bg-[#F1F1F1]">
                                <td className="border-b p-3">{categoria.id}</td>
                                <td className="border-b p-3">{categoria.nombre}</td>
                                <td className="border-b p-3">{categoria.descripcion}</td>
                                <td className="border-b p-3">
                                    <button
                                        onClick={() => handleEdit(categoria)}
                                        className="bg-blue-500 text-white px-4 py-1 rounded-[8px] mr-2 hover:bg-blue-600"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(categoria.id)}
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
                            <h2 className="text-xl mb-4">{modalType === 'add' ? 'Agregar Categoría' : 'Editar Categoría'}</h2>
                            <input
                                type="text"
                                name="nombre"
                                value={newCategoria.nombre}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Nombre"
                            />
                            <input
                                type="text"
                                name="descripcion"
                                value={newCategoria.descripcion}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Descripción"
                            />
                            <div className="flex justify-between">
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-[8px]"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSaveCategoria}
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

export default Categoria;
