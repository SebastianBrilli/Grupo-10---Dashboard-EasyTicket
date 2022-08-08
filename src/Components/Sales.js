import React, { useState, useEffect} from 'react';
import Card from './Card';

function Sales(){

	const [sales, setSales] = useState([]);

    useEffect(()=>{

        fetch('/api/sales')
		.then(response=>response.json())
		.then(data=>setSales(data.sales))
		.catch(e=>console.log(e))
        },[])


    const total = sales.map(item => item.total).reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0)

    const cantidad = sales.length  


	return(


        <React.Fragment>

            <Card  color='success' title="Cantidad de transacciones" cuantity={cantidad} />
            <Card  color='success' title="Monto Total $" cuantity={total} />                
           
        </React.Fragment>
    )
    }

export default Sales;