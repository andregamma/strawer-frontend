import React, { Component } from 'react'

import TopProducts from '../../components/TopProducts'

export default class  Products extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function () {

            // Get all "navbar-burger" elements
            var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.mobileButton'), 0);
        
            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {
        
            // Add a click event on each of them
            $navbarBurgers.forEach(function ($el) {
                $el.addEventListener('click', function () {
        
                // Get the "main-nav" element
                var $target = document.getElementById('mobileNav');
        
                // Toggle the class on "main-nav"
                $target.classList.toggle('hidden');
        
                });
            });
            }
        
        });
    }
    render(){
        return (
            <>
                <section className="Products mt-page">
                    <div className="container mx-auto bg-white rounded-lg">
                        <div className="flex md:flex-row-reverse flex-wrap">
                            <div className="w-full md:w-3/4 p-4 text-center text-gray-200">
                                <TopProducts />
                            </div>
                            <div className="w-full md:w-1/4 p-4 text-center text-gray-700">
                                <h1 className="text-xl font-bold">Filtrar</h1>
                                <div className="border-b-2 border-gray-400"></div>
                                <div className="block">
                                    <a href="#">a</a>
                                    <a href="#">b</a>
                                    <a href="#">c</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}