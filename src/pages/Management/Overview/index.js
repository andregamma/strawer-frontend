import React from 'react'
import Card from '../../../components/Card'

export default function Overview(){
    return (
        <>
        <div className="Overview">
            <div className="container mt-8 mx-auto flex mb-4">
                <Card 
                    title="Usuários" 
                    BgColor="white" 
                    value="32" 
                    context="usuários cadastrados"
                />
                <Card 
                    title="Produtos" 
                    BgColor="purple-600" 
                    TxtColor="white" 
                    value="3" 
                    context="produtos cadastrados"
                />
                <Card 
                    title="Acessos diários" 
                    BgColor="white" 
                    value="238" 
                    context="acessos diários"
                />
            </div>
            <p>Bem-vindo ao painel de gerenciamento da Strawer Store!</p>
        </div>
        </>
    )
}