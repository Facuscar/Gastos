import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto';

function Header({presupuesto, setPresupuesto, setPresupuestoValido, presupuestoValido, gastos, setGastos}) {
    return ( 
        <header>
            <h1>Planificador de gastos</h1>

            {presupuestoValido ? (
                <ControlPresupuesto
                gastos={gastos}
                setGastos={setGastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setPresupuestoValido={setPresupuestoValido}
                />
            ):(
                <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                presupuestoValido={presupuestoValido}
                setPresupuestoValido={setPresupuestoValido}
                />
            ) }
            
        </header>
     );
}

export default Header;