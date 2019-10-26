import React from 'react'
import API from '../../../api';
// import { Link } from 'react-router-dom'

export default class Products extends React.Component{
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
        return(
            <>
            <div className="mt-8 container mx-auto h-full">
                <div className="mb-8 bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md" role="alert">
                    <div className="flex">
                        <div className="py-1"><svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                        <div>
                        <p className="font-bold">Produtos cadastrados</p>
                        <p className="text-sm">Esta página apresenta todos os usuários cadastrados em nosso site bem como seus dados pessoais. A má utilização/edição dos usuários acarretará em danos ao sistema.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-t-4 border-purple-500 rounded-b px-4 py-3 shadow-md">
                    <div className="table w-full">
                        <div className="table-row">
                            <div className="table-cell bg-gray-800 text-white px-4 py-2 text-sm">ID</div>
                            <div className="table-cell bg-gray-800 text-white px-4 py-2 text-sm">Nome</div>
                            <div className="table-cell bg-gray-800 text-white px-4 py-2 text-sm">Preço padrão</div>
                            <div className="table-cell bg-gray-800 text-white px-4 py-2 text-sm">Desconto ativado?</div>
                            <div className="table-cell bg-gray-800 text-white px-4 py-2 text-sm">Preço com desconto</div>
                            <div className="table-cell bg-gray-800 text-white px-4 py-2 text-sm">Categorias</div>
                        </div>
                        {this.state.products.map(product =>
                            <div className="table-row">
                                <div className={`table-cell bg-${product % 2 ? `gray-200` : `gray-400`} text-gray-700 px-4 py-2 text-sm`}>{product.p_id}</div>
                                <div className={`table-cell bg-${product % 2 ? `gray-200` : `gray-400`} text-gray-700 px-4 py-2 text-sm`}>{product.name}</div>
                                <div className={`table-cell bg-${product % 2 ? `gray-200` : `gray-400`} text-gray-700 px-4 py-2 text-sm`}>{product.price}</div>
                                <div className={`table-cell bg-${product % 2 ? `gray-200` : `gray-400`} text-gray-700 px-4 py-2 text-sm`}>{product.promo}</div>
                                <div className={`table-cell bg-${product % 2 ? `gray-200` : `gray-400`} text-gray-700 px-4 py-2 text-sm`}>{product.price_promo}</div>
                                <div className={`table-cell bg-${product % 2 ? `gray-200` : `gray-400`} text-gray-700 px-4 py-2 text-sm`}>{product.categories}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            </>
        )
    }
}