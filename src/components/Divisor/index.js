import React from 'react'

export default function Divisor(props){
    return (
        <>
        <div className="container mt-20 mx-auto text-center">
            <div className="uppercase text-purple-500 font-medium text-sm">{props.text}</div>
            <span className="text-3xl font-extrabold text-gray-700">{props.title}</span>
        </div>
        </>
    )
}