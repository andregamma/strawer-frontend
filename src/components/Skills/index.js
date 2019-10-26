import React from 'react';
import API from '../../api';

//import './index.css'

export default class Skills extends React.Component{
    state = {
        products: []
    }
    async componentDidMount() {
        await API.get(`products`)
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
                    <div className="px-6 py-4">
                        <div className="font-bold text-2xl mb-2">Design</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
                <div className="flex-none text-center mx-auto sm:flex-1 md:flex-auto lg:flex-initial xl:flex-1 max-w-xs rounded-lg overflow-hidden shadow-lg bg-purple-500 text-white m-8">
                    <div className="px-6 py-4">
                        <div className="font-bold text-2xl mb-2">Qualidade</div>
                        <p className="text-gray-200 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
                <div className="flex-none text-center mx-auto sm:flex-1 md:flex-auto lg:flex-initial xl:flex-1 max-w-xs rounded-lg overflow-hidden shadow-lg bg-white m-8">
                    <div className="px-6 py-4">
                        <div className="font-bold text-2xl mb-2">Rapidez</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}