import React from 'react';
import API from '../../api';

export default class TopProducts extends React.Component{
    state = {
        products: []
    }
    componentDidMount() {
        API.get(`products`)
          .then(res => {
            const products = res.data;
            this.setState({ products });
        })
    }
    render(){
        return (
            <>
            <div className="flex container mx-auto">
                <div className="flex-none text-center mx-auto sm:flex-1 md:flex-auto lg:flex-initial xl:flex-1 max-w-xs rounded-lg overflow-hidden shadow-lg bg-white m-8">
                    <figure>
                        <img src="https://miro.medium.com/max/2560/1*z4GBDrjAwqtW10UyIhpDrw.jpeg" alt="Desenvolvimento de sites" srcset=""/>
                    </figure>
                    <div className="px-6 py-4">
                        <div className="font-bold text-2xl mb-2">Desenvolvimento de sites</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
                <div className="flex-none text-center mx-auto sm:flex-1 md:flex-auto lg:flex-initial xl:flex-1 max-w-xs rounded-lg overflow-hidden shadow-lg bg-purple-500 text-white m-8">
                    <figure>
                        <img src="https://http2.mlstatic.com/base-esx-roleplay-fivem-o-melhor-preco-do-ml-D_NQ_NP_737151-MLB29422820282_022019-F.jpg" alt="Desenvolvimento de scripts"/>
                    </figure>
                    <div className="px-6 py-4">
                        <div className="font-bold text-2xl mb-2">Desenvolvimento de scripts</div>
                        <p className="text-gray-200 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
                <div className="flex-none text-center mx-auto sm:flex-1 md:flex-auto lg:flex-initial xl:flex-1 max-w-xs rounded-lg overflow-hidden shadow-lg bg-white m-8">
                    <div className="px-6 py-4">
                        <div className="font-bold text-2xl mb-2">O seu produto!</div>
                        <p className="text-gray-700 text-base">
                        Caso não tenha achado o que deseja, não exite em entrar em contato conosco! Estamos a disposição para tirar a sua ideia do papel.
                        </p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}