import { useContext } from "react";
import { FamiliTreeContext } from "./Tree";



function Shvilishvili() {

    let familiTree = useContext(FamiliTreeContext)["შვილიშვილი"];
    return (
        <>
            <div className="box">
                <h3>მე ვარ GEN(3) : {familiTree}  </h3>
            </div>


        </>
    )
}


export default Shvilishvili