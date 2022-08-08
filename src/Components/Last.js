import React from 'react';

function Last(props){
    
    
    if(!props.last){
        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" >Ultimo Evento</h6>
                        </div>
                        <div className="card-body fondoCaja">

                            <p>Cargando...</p>

                        </div>
                    </div>
                </div>

            </React.Fragment>
        )

    }

    return(

        <React.Fragment>

            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800" >Ultimo Evento</h6>
                    </div>
                    <div className="card-body fondoCaja">

                        <ul>
                                <li key={props.name} >Titulo: {props.last.name}</li>
                                <li >Lugar: {props.last.address}</li>
                                <li >Fecha: {props.last.date}</li>
                                <li >Categoria: {props.last.category_id}</li>
                                <li >Ciudad: {props.last.city}</li>
                                <li >Descripcion: {props.last.description}</li>
                                <li >Link: http://localhost:3000/api/products/image/{props.last.id}</li>
                            
                        </ul>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Last;