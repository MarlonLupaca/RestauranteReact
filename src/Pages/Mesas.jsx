import React, { useState, useEffect } from 'react';
import Sliderbar from '../Components/Sliderbar';
import Navegador from '../Components/Navegador';
import Buscador from '../Components/Buscador';
import axios from 'axios';

const Mesas = () => {
    const columnasGestionMesas = ['ID', 'Número', 'Capacidad', 'Estado', 'Acciones'];

    const [mesas, setMesas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(''); // 'edit' or 'add'
    const [selectedMesa, setSelectedMesa] = useState(null); // Mesa to edit
    const [newMesa, setNewMesa] = useState({ numero: '', capacidad: '', estado: 'Libre' }); // Mesa data for adding

    // Obtener las mesas desde la API al cargar el componente
    useEffect(() => {
        axios.get('http://localhost:8081/RestauranteBackend/mesa')
            .then((response) => {
                // Verificar que la propiedad 'Mesas' exista y sea un array
                if (Array.isArray(response.data.Mesas)) {
                    // Transformamos el estado "Disponible" a "Libre"
                    const mesasConEstadoCorregido = response.data.Mesas.map(mesa => ({
                        ...mesa,
                        estado: mesa.estado === "Disponible" ? "Libre" : mesa.estado
                    }));
                    setMesas(mesasConEstadoCorregido);
                } else {
                    console.error('La respuesta no contiene un array de mesas');
                }
            })
            .catch((error) => {
                console.error('Error al obtener las mesas:', error);
            });
    }, []);

    const handleEdit = (mesa) => {
        setSelectedMesa(mesa);
        setNewMesa({ numero: mesa.numero, capacidad: mesa.capacidad, estado: mesa.estado });
        setModalType('edit');
        setShowModal(true);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/RestauranteBackend/mesa?id=${id}`)
            .then(() => {
                setMesas(prevMesas => prevMesas.filter(mesa => mesa.id !== id));
            })
            .catch((error) => {
                console.error('Error al eliminar la mesa:', error);
            });
    };

    const handleAdd = () => {
        setModalType('add');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMesa(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveMesa = () => {
        if (modalType === 'add') {
            axios.post('http://localhost:8081/RestauranteBackend/mesa', {
                numero: newMesa.numero,
                capacidad: newMesa.capacidad,
                estado: newMesa.estado
            })
                .then((response) => {
                    setMesas([...mesas, response.data.Mesa]);
                    handleCloseModal();
                })
                .catch((error) => {
                    console.error('Error al agregar la mesa:', error);
                });
        } else if (modalType === 'edit' && selectedMesa) {
            axios.put('http://localhost:8081/RestauranteBackend/mesa', {
                id: selectedMesa.id,
                numero: newMesa.numero,
                capacidad: newMesa.capacidad,
                estado: newMesa.estado
            })
                .then(() => {
                    const updatedMesas = mesas.map(mesa =>
                        mesa.id === selectedMesa.id ? { ...mesa, ...newMesa } : mesa
                    );
                    setMesas(updatedMesas);
                    handleCloseModal();
                })
                .catch((error) => {
                    console.error('Error al editar la mesa:', error);
                });
        }
    };

    return (
        <div className='h-[100vh] flex'>
            <Sliderbar />
            <Navegador name="Gestión de Mesas" />
            <main className='border flex-1 overflow-y-auto mt-[40px] p-10'>
                <Buscador />
                <button
                    onClick={handleAdd}
                    className='bg-[#08343F] text-[#F9E3D6] font-[700] w-[200px] p-2 rounded-[8px] mb-4'
                >
                    Agregar Mesa
                </button>
                <table className="table-auto w-full text-center bg-[#F8F9FA] rounded-md shadow-md">
                    <thead className="bg-[#08343F] text-white uppercase text-sm">
                        <tr>
                            {columnasGestionMesas.map((columna, index) => (
                                <th key={index} className="border-b p-3">{columna}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {mesas.map((mesa) => (
                            <tr key={mesa.id}> 
                                <td className="border-b p-3">{mesa.id}</td>
                                <td className="border-b p-3">{mesa.numero}</td>
                                <td className="border-b p-3">{mesa.capacidad}</td>
                                <td className="border-b p-3">{mesa.estado}</td>
                                <td className="border-b p-3">
                                    <button
                                        onClick={() => handleEdit(mesa)}
                                        className="bg-blue-500 text-white px-4 py-1 rounded-[8px] mr-2 hover:bg-blue-600"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(mesa.id)} // Cambié 'mesa.ID' por 'mesa.id'
                                        className="bg-red-500 text-white px-4 py-1 rounded-[8px] hover:bg-red-600"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {showModal && modalType === 'add' && (
                    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-10">
                        <div className="bg-white p-6 rounded-md w-[400px] shadow-md">
                            <h2 className="text-xl mb-4">Agregar Mesa</h2>
                            <input
                                type="text"
                                name="numero"
                                value={newMesa.numero}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Número"
                            />
                            <input
                                type="number"
                                name="capacidad"
                                value={newMesa.capacidad}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Capacidad"
                            />
                            <select
                                name="estado"
                                value={newMesa.estado}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                            >
                                <option value="Libre">Libre</option>
                                <option value="Ocupado">Ocupado</option>
                                <option value="Reservado">Reservado</option>
                            </select>
                            <div className="flex justify-between">
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-[8px]"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSaveMesa}
                                    className="bg-green-500 text-white px-4 py-2 rounded-[8px]"
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showModal && modalType === 'edit' && selectedMesa && (
                    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-10">
                        <div className="bg-white p-6 rounded-md w-[400px] shadow-md">
                            <h2 className="text-xl mb-4">Editar Mesa</h2>
                            <input
                                type="text"
                                name="numero"
                                value={newMesa.numero}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Número"
                            />
                            <input
                                type="number"
                                name="capacidad"
                                value={newMesa.capacidad}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Capacidad"
                            />
                            <select
                                name="estado"
                                value={newMesa.estado}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                            >
                                <option value="Libre">Libre</option>
                                <option value="Ocupado">Ocupado</option>
                                <option value="Reservado">Reservado</option>
                            </select>
                            <div className="flex justify-between">
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-[8px]"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSaveMesa}
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

export default Mesas;
