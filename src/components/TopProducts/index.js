import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../api';

export default class TopProducts extends Component {
    state = {
        products: [],

    }
    componentDidMount() {
        API.get('products')
          .then(res => {
            const products = res.data;
            this.setState({ products });
        })
    }
    prevPage = () => {}

    nextPage = () => {

    }

    render(){
        const { products } = this.state;

        return (
            <>
                <div className="flex flex-wrap items-center justify-center">
                    {products.map(product => (
                        <Link key={product.p_id} to={`/products/${product.p_id}`} className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                            <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{transform: 'scale(1.5)', opacity: '0.1'}}>
                                <rect x="159.52" y={175} width={152} height={152} rx={8} transform="rotate(-45 159.52 175)" fill="white" />
                                <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
                            </svg>
                            <div className="relative pt-10 px-10 flex items-center justify-center">
                                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2'}} />
                                <img className="relative w-40" src="https://upload.wikimedia.org/wikipedia/en/7/78/Multi_Theft_Auto_logo.png" alt="" />
                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">
                                <span className="block opacity-75 -mb-1">{product.categories}</span>
                                <div className="flex justify-between">
                                    <span className="block font-semibold text-xl">{product.name}</span>
                                    <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">${product.price}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-end mb-4">
                    <button onClick={this.prevPage} className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded m-2">
                        Anterior
                    </button>
                    <button onClick={this.nextPage} className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded m-2">
                        Próximo
                    </button>
                </div>
            </>
        )
    }
}