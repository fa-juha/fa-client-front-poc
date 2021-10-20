import React from 'react'
import CalendarIcon from './icons/CalendarIcon';
import CalendarCheckIcon from './icons/CalendarCheckIcon';

function SecurityInList(props) {
    console.log("Props " + JSON.stringify(props))

    let latestPrice = "-" // {props.security.latestMarketData.close.toLocaleString('fi',{ minimumFractionDigits: 2 })}
    let latestObsDate = "-" // {props.security.latestMarketData.obsDate}

    if( props.security.latestMarketData != null ) {
        latestPrice = props.security.latestMarketData.close.toLocaleString('fi',{ minimumFractionDigits: 2 })
        latestObsDate = props.security.latestMarketData.obsDate
    }


    return (
        <div>
            <div className="flex flex-wrap bg-white rounded-lg shadow-md m-1 p-2 overflow-hidden"> 
                <span className="p-4 flex-grow">
                    <div className="text-xl">{props.security.name}</div>
                    <div className="text-xl text-gray-300">{props.security.securityCode}</div>
                </span>
                <span className="text-right p-4">
                    <div className="flex">
                        <span className="p-1 text-xl bg-gray-200 rounded-xl m-1 p-2">{props.security.currency.securityCode} {latestPrice}</span>
                    </div>
                    <div className="flex">
                        <span className="p-1"><CalendarIcon/></span>
                        <span className="p-1">{latestObsDate}</span>
                    </div>
                </span>
            </div> 
        </div>
    )
}

export default SecurityInList

