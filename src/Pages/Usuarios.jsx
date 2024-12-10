import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sliderbar from '../Components/Sliderbar';
import Navegador from '../Components/Navegador';
import Buscador from '../Components/Buscador';

const Usuario = () => {
    const columnasUsuario = ['ID', 'Nombre de Usuario', 'Contraseña', 'Nombre', 'Correo Electrónico', 'Acciones'];
    const [usuarios, setUsuarios] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(''); // 'edit' o 'add'
    const [selectedUsuario, setSelectedUsuario] = useState(null); // Usuario seleccionado
    const [newUsuario, setNewUsuario] = useState({ 
        nombreUsuario: '', 
        contrasena: '', 
        nombre: '', 
        correoElectronico: '' 
    }); // Nuevo usuario

    // Cargar datos de usuarios desde la API
    useEffect(() => {
        axios.get('http://localhost:8081/RestauranteBackend/usuario')
            .then(response => {
                if (response.data && response.data.body) {
                    setUsuarios(response.data.body);
                }
            })
            .catch(error => console.error('Error al obtener los usuarios:', error));
    }, [usuarios]);

    const handleEdit = (usuario) => {
        setSelectedUsuario(usuario);
        setNewUsuario({ 
            nombreUsuario: usuario.nombreUsuario, 
            contrasena: usuario.contrasena, 
            nombre: usuario.nombre,
            correoElectronico: usuario.correoElectronico 
        }); // Precarga el formulario con los datos del usuario
        setModalType('edit');
        setShowModal(true);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/RestauranteBackend/usuario?id=${id}`)
            .then(() => {
                setUsuarios(usuarios.filter(user => user.id !== id));
            })
            .catch(error => console.error('Error al eliminar el usuario:', error));
    };

    const handleAdd = () => {
        setModalType('add');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setNewUsuario({ 
            nombreUsuario: '', 
            contrasena: '', 
            nombre: '', 
            correoElectronico: '' 
        }); // Limpiar formulario
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUsuario(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSaveUsuario = () => {
        if (modalType === 'add') {
            // Agregar nuevo usuario
            axios.post('http://localhost:8081/RestauranteBackend/usuario', newUsuario)
                .then(response => {
                    if (response.data && response.data.body) {
                        setUsuarios([...usuarios, response.data.body]);
                    }
                    handleCloseModal();
                })
                .catch(error => console.error('Error al agregar el usuario:', error));
        } else if (modalType === 'edit' && selectedUsuario) {
            // Editar usuario existente
            axios.put('http://localhost:8081/RestauranteBackend/usuario', {
                id: selectedUsuario.id,
                ...newUsuario,
            })
                .then(() => {
                    const updatedUsuarios = usuarios.map(user =>
                        user.id === selectedUsuario.id
                            ? { ...user, ...newUsuario }
                            : user
                    );
                    setUsuarios(updatedUsuarios);
                    handleCloseModal();
                })
                .catch(error => console.error('Error al actualizar el usuario:', error));
        }
    };

    return (
        <div className='h-[100vh] flex'>
            <Sliderbar />
            <Navegador name="Usuarios" />
            <main className='border flex-1 overflow-y-auto mt-[40px] p-10'>
                <Buscador />
                <button
                    onClick={handleAdd}
                    className='bg-[#08343F] text-[#F9E3D6] font-[700] w-[200px] p-2 rounded-[8px] mb-4'
                >
                    Agregar Usuario
                </button>
                <table className="table-auto w-full text-center bg-[#F8F9FA] rounded-md shadow-md">
                    <thead className="bg-[#08343F] text-white uppercase text-sm">
                        <tr>
                            {columnasUsuario.map((columna, index) => (
                                <th key={index} className="border-b p-3">{columna}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id} className="hover:bg-[#F1F1F1]">
                                <td className="border-b p-3">{usuario.id}</td>
                                <td className="border-b p-3">{usuario.nombreUsuario}</td>
                                <td className="border-b p-3">{usuario.contrasena}</td>
                                <td className="border-b p-3">{usuario.nombre}</td>
                                <td className="border-b p-3">{usuario.correoElectronico}</td>
                                <td className="border-b p-3">
                                    <button
                                        onClick={() => handleEdit(usuario)}
                                        className="bg-blue-500 text-white px-4 py-1 rounded-[8px] mr-2 hover:bg-blue-600"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(usuario.id)}
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
                            <h2 className="text-xl mb-4">{modalType === 'add' ? 'Agregar Usuario' : 'Editar Usuario'}</h2>
                            <input
                                type="text"
                                name="nombreUsuario"
                                value={newUsuario.nombreUsuario}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Nombre de Usuario"
                            />
                            <input
                                type="password"
                                name="contrasena"
                                value={newUsuario.contrasena}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Contraseña"
                            />
                            <input
                                type="text"
                                name="nombre"
                                value={newUsuario.nombre}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Nombre Completo"
                            />
                            <input
                                type="email"
                                name="correoElectronico"
                                value={newUsuario.correoElectronico}
                                onChange={handleInputChange}
                                className="border p-2 mb-4 w-full"
                                placeholder="Correo Electrónico"
                            />
                            <div className="flex justify-between">
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-[8px]"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSaveUsuario}
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

export default Usuario;
