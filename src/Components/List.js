import React from 'react';

function List(props){
    return(
        <React.Fragment>


            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800" >Espectaculos Vigentes</h6>
                    </div>
                    <div className="card-body fondoCaja">

                        <ul>
                            {props.array.map((element, i) => {
                                return (<li key={i}>{element.name}</li>)
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default List;