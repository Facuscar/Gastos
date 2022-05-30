import CerrarBtn from '../img/cerrar.svg';

function Modal({setModal, setAnimarModal,animarModal}) {

    const ocultarModal = () => {
        setTimeout(() => {
            setModal(false); 
        }, 500);
        setAnimarModal(false);
    }

    return ( 
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="boton cerrar modal"  onClick={ocultarModal}/>
            </div>

            <form action="" className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo gasto</legend>

                <div className='campo'>
                    <label htmlFor="nombre">Nombre gasto</label>

                    <input type="text" placeholder='Añade el nombre del gasto'  id='nombre'/>
                </div>

                <div className='campo'>
                    <label htmlFor="nombre">Cantidad</label>

                    <input type="number" placeholder='Añade el monto'  id='cantidad'/>
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Filtrar gastos</label>
                    <select name="" id="">
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