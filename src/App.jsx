import { useEffect, useState } from 'react'
import { generarId } from './helpers'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Filtros from './components/Filtros'

function App() {
  
  const [presupuesto, setPresupuesto] = useState( Number(localStorage.getItem('presupuesto')) ?? '' );
  const [presupuestoValido, setPresupuestoValido] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState( JSON.parse(localStorage.getItem('gastos')) ?? [] );

  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect (() => {
    if( Object.keys(gastoEditar).length > 0){
      handleNuevoGasto(false);
    } 
  }, [gastoEditar]);

  useEffect (() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]);

  useEffect (() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? '';

    if(presupuestoLS > 0){
      setPresupuestoValido(true);
    }
  }, []);

  useEffect (() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect (() => {
    if(filtro) {
      //Filtrar gastos por categoria
      const gastosFiltrados = gastos.filter (gasto => gasto.categoria === filtro);
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro])

  const handleNuevoGasto = (creando=true) => {
    setModal(modal ? false : true)
    if(creando){
      setGastoEditar({});
    }
    setTimeout(() => {
      setAnimarModal(true);
    }, 500)
  }

  const ocultarModal = () => {
    setTimeout(() => {
        setModal(false); 
        setGastoEditar({});
    }, 500);
    setAnimarModal(false);

    
  }

  const guardarGasto = gasto => {

    if(gasto.id) {
      //Actualizar
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
    } else{
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
   
    ocultarModal();
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id);

    setGastos(gastosActualizados);
  }

  return (
   <div className={modal ? 'fijar' : undefined}>
     <Header 
     gastos={gastos}
     setGastos={setGastos}
     presupuesto={presupuesto}
     setPresupuesto={setPresupuesto}
     presupuestoValido={presupuestoValido}
     setPresupuestoValido={setPresupuestoValido}
     />

     {presupuestoValido && (
       <>
        <main>
          <Filtros filtro={filtro} setFiltro={setFiltro}></Filtros>

          <ListadoGastos 
          gastos={gastos} 
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
          filtro={filtro}
          gastosFiltrados={gastosFiltrados}
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
