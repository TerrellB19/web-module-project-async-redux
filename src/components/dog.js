import React from "react";

const Dog = (props) => {
    const {image} = props;
    let i = 0

    return(
        <div> 
            <img key={i++} height="200px" src={image} />
            <h5>Search ID: {Date.now()}</h5>
        </div>
    )
}

export default Dog