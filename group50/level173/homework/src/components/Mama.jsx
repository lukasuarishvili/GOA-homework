import React, { useContext } from 'react'
import Shvili from './Shvili'
import { FamiliTreeContext } from './Tree'


export default function Mama() {

    let familiTree = useContext(FamiliTreeContext)["მამა"];

    return (
        <>
            <div className='box'>
                <h1>მე ვარ GEN(1) : {familiTree}  </h1>
                <Shvili></Shvili>
            </div>
        </>
    )
}

