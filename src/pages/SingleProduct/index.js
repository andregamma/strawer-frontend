import React, { Component } from 'react'
import TopProducts from '../../components/TopProducts'
import API from '../../services/api';

import { Link, withRouter } from 'react-router-dom'


class SingleProduct extends Component {
    constructor(){
        super()
        this.state = {
            products: [],
            productImage: []
        }
    }
    componentDidMount () {
        const productId = this.props.match.params.productId

        API.get(`products/${productId}`)
            .then(res => {
                const products = res.data[0];
                const productImage = res.data[0].images
                this.setState({ products, productImage });
                console.log(this.state.productImage)
            })
            .catch(err => console.log(err))
    }
    render(){
        const { products } = this.state;
        return (
            <>
                <section id="single-product-page" className="container mx-auto mt-20">
                    <div className="flex mb-4">
                        <div className="flex-col">

                            <div key="" className="w-32 h-32 bg-white my-4 rounded-lg">
                                <figure>
                                    <img src="{i.thumb}" alt="" className="bg-cover"/>
                                </figure>
                            </div>
      
                        </div>
                        <div className="w-3/6 h-104 my-4 mx-4 bg-white rounded-lg">
                            <img className="h-full" src={products.thumb} alt=""/>
                        </div>
                        <div className="w-full my-4 mx-4">
                            <nav className="text-black font-bold my-2" aria-label="Breadcrumb">
                                <ol className="list-none p-0 inline-flex">
                                    <li className="flex items-center">
                                        <Link to="/products">Produtos</Link>
                                        <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
                                    </li>
                                    <li className="flex items-center">
                                        <Link to={`category/${products.categories}`}>{products.categories}</Link>
                                        <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
                                    </li>
                                    <li>
                                        <Link to="#" className="text-gray-500" aria-current="page">{products.name}</Link>
                                    </li>
                                </ol>
                            </nav>
                            <div className="container mx-auto h-64 bg-white mt-12 rounded-lg py-4 mb-8">
                                <h1 className="text-2xl font-black text-gray-800">{products.name}</h1>
                                <p className="text-text mt-2 mb-4">{products.description}</p>
                                <div className="flex flex-col">
                                    <p><span className="font-bold">Tipo:</span> aa</p>
                                    <p><span className="font-bold">Categoria:</span> {products.categories}</p>
                                </div>
                            </div>
                            <button className="float-right bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                                Comprar agora
                            </button>
                        </div>
                    </div>
                </section>
                <div className="w-full h-full bg-white py-4 px-16">
                    <h1 className="text-2xl font-bold text-gray-800">Você talvez pode gostar de...</h1>
                    <div className="container mx-auto">
                        <TopProducts />
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(SingleProduct)