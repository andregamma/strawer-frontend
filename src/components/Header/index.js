import React from 'react';
import SvgHead from './assets/SvgHead';
import './index.css'

export default function Header(){
    const TransformValue = 5
    return (
        <>
        <div className="background w-header h-header -mt-16 max-h-full sm:max-h-screen md:max-h-full lg:max-h-screen xl:max-h-full flex mb-32 rounded-header">
            <div className="mt-32 px-20 text-left w-6/12" style={{transform: `rotate(${TransformValue}deg)`}}>
                <h1 className="text-4xl text-white">Strawer Store</h1>
                <h1 className="text-2xl text-white font-light" >Serviços de Desenvolvimento</h1>
                <p className="text-white font-normal mt-4">Aqui você encontra os melhores desenvolvedores para colocar sua ideia em prática. Trabalhamos com desenvolvimento de sites, fóruns, criação de bots, scripts para FiveM ou MTA e muito mais!</p>
            
                <div className="flex mb-4 justify-between w-6/12 mt-8">
                    <button className="bg-white hover:bg-primary text-black font-bold py-2 px-4 rounded-full">
                        Ver preços
                    </button>
                    <button className="bg-transparent hover:bg-secondary text-white font-bold py-2 px-4 border border-primary-500 hover:border-transparent rounded rounded-full">
                        Ver trabalhos
                    </button>
                </div>
            </div>
            <SvgHead />
        </div>
      </>
    )
}