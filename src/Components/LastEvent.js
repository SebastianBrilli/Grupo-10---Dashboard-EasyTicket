import React, { useState, useEffect} from 'react';
// import imagenFondo from '../assets/images/logo-DH.png';

async function  LastEvent(){
    
	const [eventos, setEventos] = useState([]);

    useEffect(()=>{

        fetch('/api/products')
		.then(response=>response.json())
		.then(data=>setEventos(data.products))
		.catch(e=>console.log(e))
        },[])


    return(
        <React.Fragment>
                {/* <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" >Ultimo Evento:</h6>
                        </div>
                        <div className="card-body fondoCaja">


                            <ul>
                            {categorias.map((element, i) => {
                                return (<li key={i}>{element.name}: {element.quantity}</li>)
                            })
                            }
                        </ul>
                        </div>
                    </div>
                </div>       */}

        </React.Fragment>
    )

}
export default LastEvent;