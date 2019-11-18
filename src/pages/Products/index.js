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
                <section className="Products mt-20">
                    <div className="container mx-auto bg-white rounded-lg">
                        <div className="flex md:flex-row-reverse flex-wrap">
                            <div className="w-full md:w-3/4 p-4 text-center text-gray-200">
                                <TopProducts />
                            </div>
                            <aside className="w-full md:w-1/4 p-4">
                                <div class="antialiased min-h-screen p-8">
                                    <div class="flex justify-center">
                                    <nav id="nav" class="w-56 relative">
                                        <span class="absolute h-10 w-full bg-white rounded-lg shadow ease-out transition-transform transition-medium"></span>
                                        <ul class="relative">
                                            <li>
                                                <button
                                                type="button"
                                                class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                                                >
                                                    <svg
                                                    class="text-primary h-6 w-6 transition-all ease-out transition-medium"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M12.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 101.414 1.414L4 12.414V21a1 1 0 001 1h5a1 1 0 001-1v-6h2v6a1 1 0 001 1h5a1 1 0 001-1v-8.586l.293.293a1 1 0 001.414-1.414l-9-9zM18 10.414l-6-6-6 6V20h3v-6a1 1 0 011-1h4a1 1 0 011 1v6h3v-9.586z"
                                                    />
                                                    </svg>
                                                    <span class="text-primary ml-2 text-sm font-medium transition-all ease-out transition-medium" >
                                                        Todos os produtos
                                                    </span>
                                                </button>
                                            </li>
                                            <li>
                                            <button
                                                type="button"
                                            
                                                class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                                            >
                                                <svg
                                                class="text-gray-500 h-6 w-6 transition-all ease-out transition-medium"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M11.617 1.076a1 1 0 011.09.217l5.657 5.657a9 9 0 11-13.113.41A1 1 0 017 8.022v2.292a2 2 0 104 0V2a1 1 0 01.617-.924zM13 4.414v5.9A4 4 0 015.212 11.6 7 7 0 1016.95 8.364L13 4.414z"
                                                />
                                                </svg>
                                                <span
                                                class="text-gray-500 ml-2 text-sm font-medium transition-all ease-out transition-medium"
                                                >
                                                MTA
                                                </span>
                                            </button>
                                            </li>
                                            <li>
                                            <button
                                                type="button"
                                            
                                                class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                                            >
                                                <svg
                                                class="text-gray-500 h-6 w-6 transition-all ease-out transition-medium"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M11.617 1.076a1 1 0 011.09.217l5.657 5.657a9 9 0 11-13.113.41A1 1 0 017 8.022v2.292a2 2 0 104 0V2a1 1 0 01.617-.924zM13 4.414v5.9A4 4 0 015.212 11.6 7 7 0 1016.95 8.364L13 4.414z"
                                                />
                                                </svg>
                                                <span
                                                class="text-gray-500 ml-2 text-sm font-medium transition-all ease-out transition-medium"
                                                >
                                                FiveM
                                                </span>
                                            </button>
                                            </li>
                                        </ul>
                                    </nav>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}