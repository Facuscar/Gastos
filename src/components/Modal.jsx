import { useState } from 'react';

import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg';

function Modal({setModal, setAnimarModal,animarModal}) {

    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState('');
 
    const ocultarModal = () => {
        setTimeout(() => {
            setModal(false); 
        }, 500);
        setAnimarModal(false);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios');
            setTimeout(() => {
                setMensaje('');
            }, 2500);
        }

        guardarGasto({nombre, cantidad, categoria});
    }

    return ( 
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="boton cerrar modal"  onClick={ocultarModal}/>
            </div>

            <form action="" className={`formulario ${animarModal ? "animar" : "cerrar"}`} onSubmit={handleSubmit}>
                <legend>Nuevo gasto</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre gasto</label>

                    <input type="text" placeholder='Añade el nombre del gasto'  id='nombre' value={nombre} onChange={( e => setNombre(e.target.value))}/>
                </div>

                <div className='campo'>
                    <label htmlFor="nombre">Cantidad</label>

                    <input type="number" placeholder='Añade el monto'  id='cantidad' value={cantidad} onChange={( e => setCantidad(Number(e.target.value)))}/>
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Filtrar gastos</label>
                    <select name="" id="" value={categoria} onChange={ e => setCategoria(e.target.value)}>
                        <option value="">--Seleccione--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>     
                        <option value="casa">Casa</option>     
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="subscripciones">Subscripciones</option>  
                    </select> 
                </div>

                <input type="submit"  value="Añadir gasto"/>
            </form>
        </div>
     );
}

export default Modal;