import React, { useState, useEffect} from 'react';
import Card from './Card';
import List from './List';
import Last from './Last';

function Events(){

	const [eventos, setEventos] = useState([]);
    let lastEvent={}

     useEffect (()=>{

        fetch('/api/products')
		.then(response=>response.json())
		.then(data=>setEventos(data.products))
		.catch(e=>console.log(e))
        },[])

        
        const total= eventos.map(item => item.price).reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0)
        const promedio=parseInt(total/eventos.length)
        const totalLocalidades=eventos.map(item => item.stock).reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0)
        lastEvent=eventos[eventos.length-1]
        console.log(lastEvent)

	return(
        <React.Fragment>

            <Card  color='warning' title="Total de eventos" cuantity={eventos.length} />
            <Card  color='warning' title="Total de entradas disponibles" cuantity={totalLocalidades} />
            <Card  color='warning' title="Costo promedio de entrada" cuantity={promedio} />
            <List array={eventos}  />
            <Last last={lastEvent}  />
            
   
         </React.Fragment>  
   


)}

export default Events;
