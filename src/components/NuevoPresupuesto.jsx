import { useState } from 'react';
import Mensaje from './Mensaje';

function NuevoPresupuesto({presupuesto, setPresupuesto, setPresupuestoValido}) {

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
                <input type="submit" value="Añadir" onClick={handlePresupuesto} />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
     );
}

export default NuevoPresupuesto;