import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto';

function Header({presupuesto, setPresupuesto, setPresupuestoValido, presupuestoValido, gastos}) {
    return ( 
        <header>
            <h1>Planificador de gastos</h1>

            {presupuestoValido ? (
                <ControlPresupuesto
                gastos={gastos}
                presupuesto={presupuesto}
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