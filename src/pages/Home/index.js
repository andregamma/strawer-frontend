import React from 'react'

import Header from '../../components/Header'
import Divisor from '../../components/Divisor'
import Skills from '../../components/Skills'

export default function Home(){
    return (
        <>
            <Header />
            <Divisor text="Qualidades da Strawer" title="Nossas qualidades" />
            <Skills />
        </>
    )
}