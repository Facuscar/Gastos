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
            </form>
        </div>
     );
}

export default Modal;