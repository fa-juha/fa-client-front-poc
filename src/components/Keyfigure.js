import React from 'react'

function Keyfigure(props) {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-2 p-4 overflow-hidden sm:w-52"> 
            <div className=" bg-gray-100 rounded-full text-red-500 p-4 m-4">{props.children}</div>
            <h1 className="text-center text-sm">{props.name}</h1>
            <p className="text-center text-2xl">{ props.figure.toLocaleString('fi',{ minimumFractionDigits: 2 })}</p>
        </div> 
    )
}

export default Keyfigure