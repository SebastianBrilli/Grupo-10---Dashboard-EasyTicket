import React, { useState, useEffect} from 'react';
import Card from './Card';


function Users(){

	const [users, setUsers] = useState([]);

    useEffect(()=>{

        fetch('/api/users')
		.then(response=>response.json())
		.then(data=>setUsers(data.users))
		.catch(e=>console.log(e))
        },[])

	return(


        <React.Fragment>
           
            <Card  color='primary' title="Cantidad de usuarios" cuantity={users.length} />
           
        </React.Fragment>
    )
    }

export default Users;