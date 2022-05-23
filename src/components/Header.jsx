import NuevoPresupuesto from './NuevoPresupuesto'

function Header({presupuesto, setPresupuesto, setPresupuestoValido, presupuestoValido}) {
    return ( 
        <header>
            <h1>Planificador de gastos</h1>

            <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            presupuestoValido={presupuestoValido}
            setPresupuestoValido={setPresupuestoValido}
            />
        </header>
     );
}

export default Header;