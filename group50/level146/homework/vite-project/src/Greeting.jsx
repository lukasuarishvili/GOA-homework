import { useState } from "react";

function Greet(props){
    return(
         <h1 className="text-2xl font-semibold"> hello  <span className="text-teal-200">{props.name} </span></h1>
    )
   
}

export default Greet