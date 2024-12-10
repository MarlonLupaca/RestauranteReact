import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sliderbar from '../Components/Sliderbar';
import Navegador from '../Components/Navegador';
import Buscador from '../Components/Buscador';

const Empleado = () => {
    const columnasEmpleado = ['ID', 'Nombre', 'Puesto', 'Turno', 'Acciones'];
    const [empleados, setEmpleados] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(''); // 'edit' o 'add'
    const [selectedEmpleado, setSelectedEmpleado] = useState(null); // Empleado seleccionado
    const [newEmpleado, setNewEmpleado] = useState({ nombre: '', puesto: '', turno: '' }); // Nuevo empleado

    // Cargar datos de empleados desde la API
    useEffect(() => {
        axios.get('http://localhost:8081/RestauranteBackend/empleado')
            .then(response => {
                if (response.data && response.data.Empleados) {
                    setEmpleados(response.data.Empleados);
                }
            })
            .catch(error => console.error('Error al obtener los empleados:', error));
    }, [empleados]);

    const handleEdit = (empleado) => {
        setSelectedEmpleado(empleado);
        setNewEmpleado({ nombre: empleado.nombre, puesto: empleado.puesto, turno: empleado.turno }); // Precarga el formulario
        setModalType('edit');
        setShowModal(true);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/RestauranteBackend/empleado?id=${id}`)
            .then(() => {
                setEmpleados(empleados.filter(emp => emp.id !== id));
            })
            .catch(error => console.error('Error al eliminar el empleado:', error));
    };

    const handleAdd = () => {
        setModalType('add');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setNewEmpleado({ nombre: '', puesto: '', turno: '' }); // Limpiar formulario
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmpleado(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSaveEmpleado = () => {
        if (modalType === 'add') {
            // Agregar nuevo empleado
            axios.post('http://localhost:8081/RestauranteBackend/empleado', newEmpleado)
                .then(response => {
                    if (response.data && response.data.Empleados) {
                        setEmpleados([...empleados, response.data.Empleados]);
                    }
                    handleCloseModal();
                })
                .catch(error => console.error('Error al agregar el empleado:', error));
        } else if (modalType === 'edit' && selectedEmpleado) {
            // Editar empleado existente
            axios.put('http://localhost:8081/RestauranteBackend/empleado', {
                id: selectedEmpleado.id,
                ...newEmpleado,
            })
                .then(() => {
                    const updatedEmpleados = empleados.map(emp =>
                        emp.id === selectedEmpleado.id
                            ? { ...emp, ...newEmpleado }
                            : emp
                    );
                    setEmpleados(updatedEmpleados);
                    handleCloseModal();
                })
                .catch(error => console.error('Error al actualizar el empleado:', error));
        }
    };

    return (
        <div className='h-[100vh] flex'>
            <Sliderbar />
            <Navegador name="Empleados" />
            <main className='border flex-1 overflow-y-auto mt-[40px] p-10'>
                <Buscador />
                <button
                    onClick={handleAdd}
                    className='bg-[#08343F] text-[#F9E3D6] font-[700] w-[200px] p-2 rounded-[8px] mb-4'
                >
                    Agregar Empleado
                </button>
                <table className="table-auto w-full text-center bg-[#F8F9FA] rounded-md shadow-md">
                    <thead className="bg-[#08343F] text-white uppercase text-sm">
                        <tr>
                            {columnasEmpleado.map((columna, index) => (
                                <th key={index} className="border-b p-3">{columna}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map((empleado) => (
                            <tr key={empleado.id} className="hover:bg-[#F1F1F1]">
                                <td className="border-b p-3">{empleado.id}</td>
                                <td className="border-b p-3">{empleado.nombre}</td>
                                <td className="border-b p-3">{empleado.puesto}</td>
                                <td className="border-b p-3">{empleado.turno}</td>
                                <td className="border-b p-3">
                                    <button
                                        onClick={() => handleEdit(empleado)}
                                        className="bg-blue-500 text-white px-4 py-1 rounded-[8px] mr-2 hover:bg-blue-600"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(empleado.id)}
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
                            <h2 className="text-xl mb-4">{modalType === 'add' ? 'Agregar Empleado' : 'Editar Empleado'}</h2>
                            <input
                                type="text"
                                name="nombre"
                                value={newEmpleado.nombre}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Nombre"
                            />
                            <input
                                type="text"
                                name="puesto"
                                value={newEmpleado.puesto}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Puesto"
                            />
                            <input
                                type="text"
                                name="turno"
                                value={newEmpleado.turno}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Turno"
                            />
                            <div className="flex justify-between">
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-[8px]"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSaveEmpleado}
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

export default Empleado;
