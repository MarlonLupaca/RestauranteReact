import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'  // Importa el CSS para el estilo de los toasts

const Register = () => {
    const navigate = useNavigate()

    // Estados para manejar datos del formulario
    const [formData, setFormData] = useState({
        nombreUsuario: '',
        contrasena: '',
        nombre: '',
        correoElectronico: ''
    })
    const [error, setError] = useState('')

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target

        // Validación para el nombre de usuario para que no tenga espacios
        if (name === 'nombreUsuario' && value.includes(' ')) {
            setError('El nombre de usuario no puede contener espacios');
        } else {
            setError(''); // Limpia el error si el campo es válido
        }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Verificar si hay error antes de enviar el formulario
        if (error || !formData.nombreUsuario.trim()) {
            toast.error(error || 'El nombre de usuario no puede estar vacío', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
            return; // Si hay error, no continúa con el envío
        }

        try {
            const response = await fetch('http://localhost:8081/RestauranteBackend/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                toast.success('Usuario registrado correctamente', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
                navigate('/') // Redirige a Login
            } else {
                const errorData = await response.json()
                toast.error(`Error: ${errorData.message || 'No se pudo registrar el usuario'}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                })
            }
        } catch (error) {
            console.error('Error:', error)
            toast.error('Ocurrió un error al registrar el usuario', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        }
    }

    return (
        <div className='h-[100vh] flex justify-center items-center fondo'>
            <div className='flex h-[600px] w-[1000px] bg-[#E3E2E0] rounded-[20px] opacity-[0.85]'>
                <div className='w-[50%] flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-[#08343F] font-[800] text-[60px] mb-4'>Restaurante</h1>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-3 items-center w-[350px]'>
                        <div className='flex flex-col gap-1 w-[300px]'>
                            <label htmlFor="nombre" className='text-[#08343F] font-[700]'>Nombre</label>
                            <input type="text" name="nombre" id="nombre" className='input_none px-3 py-1 rounded-[8px]' placeholder='Nombre Completo' onChange={handleChange} required/>
                        </div>

                        <div className='flex flex-col gap-1 w-[300px]'>
                            <label htmlFor="nombreUsuario" className='text-[#08343F] font-[700]'>Usuario</label>
                            <input 
                                type="text" 
                                name="nombreUsuario" 
                                id="nombreUsuario" 
                                className='input_none px-3 py-1 rounded-[8px]' 
                                placeholder='Nombre de usuario'
                                onChange={handleChange} 
                                required
                            />
                            {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
                        </div>

                        <div className='flex flex-col gap-1 w-[300px]'>
                            <label htmlFor="correoElectronico" className='text-[#08343F] font-[700]'>Correo Electrónico</label>
                            <input type="email" name="correoElectronico" id="correoElectronico" className='input_none px-3 py-1 rounded-[8px]' placeholder='Correo' onChange={handleChange} required/>
                        </div>

                        <div className='flex flex-col gap-1 w-[300px]'>
                            <label htmlFor="contrasena" className='text-[#08343F] font-[700]'>Contraseña</label>
                            <input type="password" name="contrasena" id="contrasena" className='input_none px-3 py-1 rounded-[8px]' placeholder='Contraseña' onChange={handleChange} required/>
                        </div>

                        <div className='flex flex-col gap-4 mt-6'>
                            <button 
                                type="submit" 
                                className='bg-[#08343F] text-[#F9E3D6] border-[2px] border-[#F9E3D6] font-[700] w-[300px] p-1 rounded-[8px]'
                                disabled={error || !formData.nombreUsuario.trim()} // Deshabilita el botón si hay un error
                            >
                                Registrarse
                            </button>

                            <Link to="/">
                                <button type="button" className='bg-[#F9E3D6] text-[#08343F] border-[2px] border-[#08343F] font-[700] w-[300px] p-1 rounded-[8px]'>
                                    Volver al Login
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
    )
}

export default Register
