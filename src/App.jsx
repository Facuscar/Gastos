import { useState } from 'react'
import './App.css'
import { generarId } from './helpers'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoValido, setPresupuestoValido] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);
 
  const handleNuevoGasto = () => {
    setModal(modal ? false : true)

    setTimeout(() => {
      setAnimarModal(true);
    }, 500)
  }

  const ocultarModal = () => {
    setTimeout(() => {
        setModal(false); 
    }, 500);
    setAnimarModal(false);
  }

  const guardarGasto = gasto => {
    gasto.id = generarId();
    setGastos([...gastos, gasto]);
    ocultarModal();
  }

  return (
   <div>
     <Header 
     presupuesto={presupuesto}
     setPresupuesto={setPresupuesto}
     presupuestoValido={presupuestoValido}
     setPresupuestoValido={setPresupuestoValido}
     />

     {presupuestoValido && (
      <div className='nuevo-gasto'>
       <img src={IconoNuevoGasto} alt="Icono agregar gasto" onClick={handleNuevoGasto} />
     </div>
     )}
     
      { modal && (
        <Modal 
        animarModal={animarModal}
        guardarGasto={guardarGasto}
        ocultarModal={ocultarModal}
          />
      )}

   </div>
  )
}

export default App
