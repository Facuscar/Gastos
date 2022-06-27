import { useState, useEffect } from 'react';

import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg';

function Modal({animarModal, guardarGasto, ocultarModal, gastoEditar}) {

    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState('');
    const [creando, setCreando] = useState(false);
 
    useEffect(() => {
        if( Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id);
            setFecha(gastoEditar.fecha);
        }
    }, []);

    const creandoGasto = () => {
        setCreando(true);
        setTimeout(() => {
            setCreando(false);
        }, 500);
    }

    const handleSubmit = e => {
        
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios');
            setTimeout(() => {
                setMensaje('');
            }, 2500);
            return;
        }
        if(!creando){
            guardarGasto({nombre, cantidad, categoria, id, fecha});
            creandoGasto();
        }   
    }

    const setCantidadNumber = value => {
        setCantidad(Number(value));
    }
    return ( 
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="boton cerrar modal"  onClick={ocultarModal}/>
            </div>

            <form action="" className={`formulario ${animarModal ? "animar" : "cerrar"}`} onSubmit={handleSubmit}>
                <legend>{gastoEditar.nombre ? 'Editar gasto' : 'Nuevo gasto'}</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre gasto</label>

                    <input type="text" placeholder='Añade el nombre del gasto'  id='nombre' value={nombre} onChange={( e => setNombre(e.target.value))}/>
                </div>

                <div className='campo'>
                    <label htmlFor="nombre">Cantidad</label>

                    <input type="number" placeholder='Añade el monto'  id='cantidad' value={cantidad} onChange={( e => setCantidadNumber(e.target.value))}/>
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

                <input type="submit"  value={gastoEditar.nombre ? 'Guardar cambios' : 'Añadir gasto'}/>
            </form>
        </div>
     );
}

export default Modal;