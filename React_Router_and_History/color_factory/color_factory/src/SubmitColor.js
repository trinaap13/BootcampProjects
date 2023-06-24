import React from "react";

function SubmitColor({handleSubmit}) {

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-color">New Color:</label>
                <input 
                type="text" 
                id="new-color" 
                name="new-color" />
            </form>
        </div>
    )
}

export default SubmitColor;