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
                    pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                })}
                text={`${porcentaje}% Gastado`}
                ></CircularProgressbar>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(Number(presupuesto))}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span> {formatearCantidad(Number(disponible))}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(Number(gastado))}
                </p>
            </div>
        </div>
     );
}

export default ControlPresupuesto;