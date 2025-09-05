import { useState } from "react";

function ShowProduct(props) {
    return (
        <div>
            <h1 className="text-2xl font-semibold">{props.name} </h1>
            <p className="text-4xl">{props.description} </p>
        </div>



    )

}

export default ShowProduct