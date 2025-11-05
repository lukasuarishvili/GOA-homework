import React, { useState } from 'react'
import { createContext } from 'react'
import Mama from './Mama'

export const FamiliTreeContext = createContext();


export default function Tree() {

    let [familiTree, setFamiliTree] = useState({
        "მამა": "ვიტო",
        "შვილი": "მაიკლი",
        "შვილიშვილი": "ჯონი"
    })

    return (
        <>
            <FamiliTreeContext.Provider value={familiTree}>
                <Mama></Mama>
            </FamiliTreeContext.Provider>
        </>

    )
}

