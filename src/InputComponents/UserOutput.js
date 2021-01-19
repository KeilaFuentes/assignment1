import React from 'react';


const userOutput = (props) =>{
    return(
        <div >
            <p>Hola {props.name} {props.lastname}</p>
            <p>Al fin</p>
        </div>
    )
};

export default userOutput;