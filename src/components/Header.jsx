import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto';

function Header({presupuesto, setPresupuesto, setPresupuestoValido, presupuestoValido}) {
    return ( 
        <header>
            <h1>Planificador de gastos</h1>

            {presupuestoValido ? (
                <ControlPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
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