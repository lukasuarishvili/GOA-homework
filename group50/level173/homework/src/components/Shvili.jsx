import { useContext } from "react";
import { FamiliTreeContext } from "./Tree";
import Shvilishvili from "./Shvilishvili";

function Shvili() {

    const familiTree = useContext(FamiliTreeContext)["შვილი"];

    return (
        <>
            <div className="box">
                <h2>მე ვარ GEN(2) : {familiTree}  </h2>
                <Shvilishvili></Shvilishvili>
            </div>


        </>
    )

}

export default Shvili