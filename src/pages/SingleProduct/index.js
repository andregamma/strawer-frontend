import React, { Component } from 'react'

export default class SingleProduct extends Component {
    render(){
        return (
            <>
            <section className="SingleProduct mt-20">
                <div className="container mx-auto">
                    <div className="flex flex-col">
                        <div className="w-32 h-32 bg-white my-4 rounded-lg"></div>
                        <div className="w-32 h-32 bg-white my-4 rounded-lg"></div>
                        <div className="w-32 h-32 bg-white my-4 rounded-lg"></div>
                        <div className="w-64 h-64 bg-white rounded-lg">
                            <figure>
                                <img src="https://www.autoentusiastas.com.br/ae/wp-content/uploads/2016/12/dea02d-GTA5-2016-08-28-17-25-48-602.jpg" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}