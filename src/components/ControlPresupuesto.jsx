import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

function ControlPresupuesto({gastos, presupuesto}) {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);
 
    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;

        //Calcular el porcentaje de lo gastado en cuanto al presupuesto
        const nuevoPorcentaje =((totalGastado / presupuesto) * 100).toFixed(2);
        console.log(nuevoPorcentaje);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1000);
        setDisponible(totalDisponible);
        setGastado(totalGastado);
    }, [gastos])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-ES', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }
    return ( 
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar 
                value={porcentaje} 
                styles={buildStyles({
                    pathColor: '#3B82F6',
                    trailColor: '#F5F5F5',
                })}
                text={`${porcentaje}% Gastado`}
                ></CircularProgressbar>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
     );
}

export default ControlPresupuesto;