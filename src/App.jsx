import { useEffect, useState } from 'react'
import './App.css'
import { generarId } from './helpers'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoValido, setPresupuestoValido] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect (() => {
    if( Object.keys(gastoEditar).length > 0){
      handleNuevoGasto(false);
    } 
  }, [gastoEditar]);
 
  const handleNuevoGasto = (creating=true) => {
    setModal(modal ? false : true)
    if(creating){
      setGastoEditar({});
    }
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
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    ocultarModal();
  }

  return (
   <div className={modal ? 'fijar' : undefined}>
     <Header 
     gastos={gastos}
     presupuesto={presupuesto}
     setPresupuesto={setPresupuesto}
     presupuestoValido={presupuestoValido}
     setPresupuestoValido={setPresupuestoValido}
     />

     {presupuestoValido && (
       <>
        <main>
          <ListadoGastos 
          gastos={gastos} 
          setGastoEditar={setGastoEditar}
          />
        </main>
        <div className='nuevo-gasto'>
        <img src={IconoNuevoGasto} alt="Icono agregar gasto" onClick={handleNuevoGasto} />
      </div>
     </>
     )}
     
      { modal && (
        <Modal 
        animarModal={animarModal}
        guardarGasto={guardarGasto}
        ocultarModal={ocultarModal}
        gastoEditar={gastoEditar}
          />
      )}

   </div>
  )
}

export default App
