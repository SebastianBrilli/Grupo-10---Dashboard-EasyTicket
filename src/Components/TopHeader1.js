import React from 'react';
import Users from './Users';
import Events from './Events';
import Sales from './Sales';



function TopHeader1(){
    return (
        <React.Fragment>

            <h3>Informacion General</h3>
            <div className="row">
                <Users/>
                <Sales/>
                <Events/>
            </div>

        </React.Fragment>
    )
}
export default TopHeader1;