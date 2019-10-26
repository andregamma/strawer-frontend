import React from 'react'

import Header from '../../components/Header'
import Divisor from '../../components/Divisor'
import Skills from '../../components/Skills'
import TopProducts from '../../components/TopProducts'
import Footer from '../../components/Footer'

export default function Home(){
    return (
        <>
            <Header />
            <Divisor text="Qualidades da Strawer" title="Nossas qualidades" />
            <Skills />
            <Divisor text="Nossos produtos" title="Temos uma vasta coleção!" />
            <TopProducts />
            <Footer />
        </>
    )
}