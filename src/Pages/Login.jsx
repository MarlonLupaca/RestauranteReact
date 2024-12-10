import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    // Estado para manejar los valores de usuario y contraseña
    const [formData, setFormData] = useState({
        usuario: '',
        pass: ''
    });

    // Estado para manejar el error en caso de que la autenticación falle
    const [errorMessage, setErrorMessage] = useState('');

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Construir la URL con los parámetros de usuario y contraseña
            const url = `http://localhost:8081/RestauranteBackend/usuario/auth?nombreUsuario=${encodeURIComponent(formData.usuario)}&contrasena=${encodeURIComponent(formData.pass)}`;

            // Enviar la solicitud de autenticación
            const response = await fetch(url, {
                method: 'GET', // Usamos GET ya que estamos pasando los parámetros en la URL
            });

            // Verificar la respuesta de la API
            const data = await response.json();

            if (data.Authentication) {
                // Si la autenticación es exitosa, redirigir al Home
                navigate('/Home');
            } else {
                // Si la autenticación falla, mostrar el mensaje de error
                setErrorMessage(data.Error || 'Error desconocido');
            }
        } catch (error) {
            console.error('Error en la autenticación:', error);
            setErrorMessage('Ocurrió un error al intentar iniciar sesión');
        }
    };

    return (
        <div className=' h-[100vh] flex justify-center items-center fondo'>
            <div className='flex h-[550px] w-[1000px] bg-[#E3E2E0] rounded-[20px] opacity-[0.85]'>
                
                <div className='w-[50%] flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-[#08343F] font-[800] text-[60px] mb-4'>Restaurante</h1>

                    <form onSubmit={handleSubmit} className=' flex flex-col gap-3 items-center w-[350px]'>
                        <div className='flex flex-col gap-1 w-[300px]'>
                            <label htmlFor="usuario" className='text-[#08343F] font-[700]'>Usuario</label>
                            <input 
                                type="text" 
                                name="usuario" 
                                id="usuario" 
                                className='input_none px-3 py-1 rounded-[8px]' 
                                placeholder='Example'
                                value={formData.usuario}
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-1 w-[300px]'>
                            <label htmlFor="pass" className='text-[#08343F] font-[700]'>Contraseña</label>
                            <input 
                                type="password" 
                                name="pass" 
                                id="pass" 
                                className='input_none px-3 py-1 rounded-[8px]' 
                                placeholder='Password'
                                value={formData.pass}
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        {errorMessage && (
                            <div className='text-red-500 font-semibold mt-2'>{errorMessage}</div>
                        )}

                        <div className='flex flex-col gap-4 mt-6'>
                            <button 
                                type="submit" 
                                className='bg-[#08343F] text-[#F9E3D6] border-[2px] border-[#F9E3D6] font-[700] w-[300px] p-1 rounded-[8px]'
                            >
                                Iniciar Sesión
                            </button>

                            <Link to="/Register">
                                <button 
                                    type="button" 
                                    className='bg-[#F9E3D6] text-[#08343F] border-[2px] border-[#08343F] font-[700] w-[300px] p-1 rounded-[8px]'
                                >
                                    Registrarse
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className='h-full'>
                    <img src="assets/Comidas.jpg" alt="Comidas" className='h-full rounded-r-[20px]'/>
                </div>
            </div>
        </div>
    );
};

export default Login;
