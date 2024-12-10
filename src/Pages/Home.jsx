import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Importamos axios para hacer solicitudes HTTP
import Sliderbar from '../Components/Sliderbar';
import Navegador from '../Components/Navegador';
import Mesa from '../Components/Mesa';
import Modal from '../mod/Modal';

const Home = () => {
    const [modEstado, setModEstado] = useState(false);
    const [mesas, setMesas] = useState([]); // Estado para almacenar las mesas obtenidas de la API

    const toggleEstado = () => {
        setModEstado(!modEstado);
    };

    // Usamos useEffect para cargar las mesas desde la API cuando el componente se monta
    useEffect(() => {
        axios.get('http://localhost:8081/RestauranteBackend/mesa')
            .then(response => {
                if (response.data && response.data.Mesas) {
                    setMesas(response.data.Mesas); // Guardamos las mesas en el estado
                }
            })
            .catch(error => console.error('Error al obtener las mesas:', error));
    }, []); // El array vacío asegura que esta solicitud solo se realice una vez cuando el componente se monte

    return (
        <div className='h-[100vh] flex'>
            <Sliderbar />
            <Navegador name="Dashboard" />
            <main className='flex-1 overflow-y-auto mt-[70px] custom_grid p-10 justify-items-center gap-10'>
                {/* Mapeamos las mesas para renderizarlas */}
                {mesas.map((mesa) => (
                    <Mesa
                        key={mesa.id}
                        TogleEstado={toggleEstado}
                        estado={mesa.estado} // Pasamos el estado de la mesa
                        mesa={mesa.numero}  // Pasamos el número de la mesa
                    />
                ))}
            </main>

            {/* Modal para cambiar el estado de la mesa */}
            {modEstado && (
                <Modal TogleEstado={toggleEstado} />
            )}
        </div>
    );
};

export default Home;
