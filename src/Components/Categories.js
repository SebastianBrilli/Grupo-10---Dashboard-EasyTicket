import React, { useState, useEffect} from 'react';

function Categories(){
	const [categorias, setCategorias] = useState([]);

    useEffect(()=>{

        fetch('/api/products')
		.then(response=>response.json())
		.then(data=>setCategorias(data.countByCategory))
		.catch(e=>console.log(e))
        },[])

        return(

            <React.Fragment>

                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" >Categorias</h6>
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
                </div>           
               
            </React.Fragment>
        )
}

export default Categories;