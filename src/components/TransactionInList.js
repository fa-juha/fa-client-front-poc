import React from 'react'
import CalendarIcon from './icons/CalendarIcon';
import CalendarCheckIcon from './icons/CalendarCheckIcon';

function TransactionInList(props) {
    console.log("Props " + JSON.stringify(props))
    return (
        <div>
            <div className="flex flex-wrap bg-white rounded-lg shadow-md w-full m-1 p-2 overflow-hidden"> 
                <span className="bg-gray-200 rounded-xl text-3xl text-bold p-4">{props.transaction.typeCode}</span>
                <span className="p-4 flex-grow">
                    <div className="text-xl">{props.transaction.securityName}</div>
                    <div className="text-xs">{props.transaction.extInfo}</div>
                    <div className="text-xs">Amount: {props.transaction.amount.toLocaleString('fi',{ minimumFractionDigits: 0 })} Unit price:{props.transaction.unitPrice.toLocaleString('fi',{ minimumFractionDigits: 0 })} Costs: {props.transaction.totalCost.toLocaleString('fi',{ minimumFractionDigits: 0 })}</div>
                </span>
                <span className="text-right p-4">
                    <div className="flex">
                        <span className="p-1 text-xl bg-gray-200 rounded-xl m-1 p-2">{props.transaction.currencyCode} {props.transaction.tradeAmount.toLocaleString('fi',{ minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex">
                        <span className="p-1"><CalendarIcon/></span>
                        <span className="p-1">{props.transaction.transactionDate}</span>
                    </div>
                    <div className="flex">
                        <span className="p-1 text-gray-400"><CalendarCheckIcon/></span>
                        <span className="p-1 text-gray-400 text-right">{props.transaction.settlementDate}</span>
                    </div>
                </span>
            </div> 
        </div>
    )
}

export default TransactionInList

