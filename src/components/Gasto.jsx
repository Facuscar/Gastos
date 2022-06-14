import { formatearFecha } from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';

function Gasto({gasto}) {
    return ( 
    <div className="gasto sombra">
        {/* Imagen */}
        <div className="contenido-gasto">
            <div className="descripcion-gasto">
                <p className="categoria">
                    {gasto.categoria}
                </p>
                <p className="nombre-gasto">{gasto.nombre}</p>
                <p className='fecha-gasto'>Agregado el: {''} <span>{formatearFecha(gasto.fecha)}</span></p>
            </div>
        </div>
        <p className='cantidad-gasto'>${gasto.cantidad}</p>
    </div> 
    );
}

export default Gasto;