import React from 'react'

import Divisor from '../../components/Divisor'
import Skills from '../../components/Skills'
import Hero from '../../components/Hero'
import TopProducts from '../../components/TopProducts'
import Footer from '../../components/Footer'

export default function Home(){
    return (
        <>
            <Hero />
            <section className="Home mt-page">
                <Divisor text="Qualidades da Strawer" title="Nossas qualidades" />
                <Skills />
                <Divisor text="Nossos produtos" title="Temos uma vasta coleção!" />
                <TopProducts />
                <Footer title="a"/>
            </section>
        </>
    )
}