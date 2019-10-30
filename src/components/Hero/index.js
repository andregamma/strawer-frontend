import React from 'react'
import SvgHead from './assets/SvgHead';

export default function Hero(){
    return (
        <div className="bg-strawer rotate-0 lg:-rotate-5 w-auto md:w-header h-header flex flex-col md:flex-row items-center mb-32 rounded-header absolute z-0">
            <div className="mt-32 px-4 md:px-20 flex flex-col w-full lg:w-1/2 justify-center items-start rotate-0 sm:rotate-5">
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
            <div className="w-full lg:w-1/2 lg:py-6 text-center -mt-25">
                <SvgHead />
            </div>
        </div>
    )
}