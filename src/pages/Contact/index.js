import React, { Component } from 'react'
import Bg from "./bg.js"
import ContactSvg from "./ContactSvg.js"

export default class Contact extends Component {
    render() {
        return (
            <>
                <section className="Contact mt-20">
                    <div className="container mx-auto bg-white rounded-t-lg">
                        <div className="flex flex-row justify-between">
                            <div className="w-2/3 ml-12 mt-12">
                                <h1 className="text-3xl text-text font-bold">Contate-nos</h1>
                                <p className="w-2/3 font-light text-gray-700">Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é. Mé faiz elementum girarzis, nisi eros vermeio. Pra lá , depois divoltis porris, paradis. </p>
                            </div>
                            <div className="">
                                    <ContactSvg />
                                    <Bg />
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto flex flex-col bg-gray-200 rounded-b-lg mb-8">
                        <h1 className="text-3xl text-text font-bold mx-auto mt-8">
                            Formulário para contato
                        </h1>
                        <div className="container w-4/5 flex mx-auto">
                            <div className="w-1/4 mb-8 mt-12 bg-purple-500 rounded-l-lg">
                               <div className="w-full max-w-lg mt-4 mb-4">
                                   <p className="text-center text-white">Hey! <br /> Aqui neste cantinho você pode entrar em contato diretamente conosco. Responderemos a sua dúvida o mais rápido possível.</p>
                               </div>
                            </div>
                            <div className="w-3/4 h-full mb-8 mt-12 bg-white rounded-r-lg">
                                <h1 className="text-3xl text-text font-bold text-center mt-8">
                                    Olá!
                                </h1>
                                <p className="text-center text-gray-700">
                                    Preencha o formulário abaixo.
                                </p>
                                <form className="mx-auto w-full max-w-lg mt-12">
                                    <div className="flex flex-col -mx-3 mb-6">
                                        <div className="w-full px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Seu melhor e-mail
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border-l-2 border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="meuemail@exemplo.com.br" />
                                        </div>
                                        <div className="w-full px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Sua mensagem
                                            </label>
                                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border-l-2 border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-message"  placeholder="Olá, meu nome é..." />
                                        </div>
                                    </div>
                                    <button class="float-right bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mb-4">
                                        Enviar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}