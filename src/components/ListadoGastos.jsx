import Gasto from "./Gasto";

function ListadoGastos({gastos}) {

    console.log(gastos);

    return ( 
        <div className="listado-gastos contenedor">
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {
                gastos.map(gasto => (
                    <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    ></Gasto>
                ))
            }
        </div>
     );
}

export default ListadoGastos;