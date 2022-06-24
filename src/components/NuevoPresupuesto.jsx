import { useState } from 'react';
import Mensaje from './Mensaje';

function NuevoPresupuesto({presupuesto, setPresupuesto, setPresupuestoValido, presupuestoValido}) {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();
        if(!presupuesto || presupuesto < 0){
            setMensaje('No es un presupuesto válido');
            return;
        }
        setPresupuestoValido(true);
        setMensaje('');
    }

    const setPresupuestoNumber = (value => {
        setPresupuesto(Number(value));
    })

    const deshabilitarBoton = (e) => {
        e
    }

     return ( 
        <div className="contenedor-presupuesto contenedor sombra">

            <form className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>

                    <input
                    className="nuevo-presupuesto"
                    type="number"
                    placeholder="Añade tu presupuesto"
                    value={presupuesto}
                    onChange={ e => setPresupuestoNumber(e.target.value)}
                     />
                </div>
                <input disabled="true" type="submit"  value="Añadir" onClick={[handlePresupuesto, e => deshabilitarBoton(e)]} />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
     );
}

export default NuevoPresupuesto;