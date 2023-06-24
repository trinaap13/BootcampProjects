import React from "react";
import { useParams, useHistory } from "react-router-dom";

function ColorDetails() {
    const { color } = useParams();
    const history = useHistory();

    function goBack() {
        history.push('/')
    }
    return (
        <>
            <button  onClick={goBack}>Back</button>
            <div style={{fontSize: 35,fontWeight: 'bold', height: '100vh', backgroundColor: `${color}`}}>
                <p>This is a {color} background!</p>
            </div>
            
        </>
    )
}

export default ColorDetails;