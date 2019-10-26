import React from 'react'

export default function Card(props){
    return (
        <>
        <div className={`max-w-sm rounded mx-auto bg-${props.BgColor} overflow-hidden shadow-lg`}>
            <div className="px-6 py-4">
                <div className={`font-bold text-${props.TxtColor} text-xl mb-2`}>{props.title}</div>
                <p className={`text-${props.TxtColor} text-base`}>
                Temos atualmente {props.value} {props.context}!
                </p>
            </div>
            <div className="px-6 mx-auto py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Mais informações</span>
            </div>
        </div>
        </>
    )
}