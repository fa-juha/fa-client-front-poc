import React from 'react'
import CalendarIcon from './icons/CalendarIcon';
import CalendarCheckIcon from './icons/CalendarCheckIcon';
import CashIcon from './icons/CashIcon';
import ArrowUpIcon from './icons/ArrowUpIcon';
import ArrowDownIcon from './icons/ArrowDownIcon';

class TransactionInList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false,
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        console.log("Clicked")
        this.setState({open: !this.state.open})
    }

    render() {
        console.log(JSON.stringify(this.props.transaction))
        var icon = <CashIcon/>
        if( this.props.transaction.type.amountEffect > 0 ) icon = <ArrowUpIcon/>
        if( this.props.transaction.type.amountEffect < 0 ) icon = <ArrowDownIcon/>
        return (
            <div className="flex bg-white rounded-lg shadow-md m-1 p-1" onClick={(e)=>this.togglePanel(e)}>
                <div className="text-green-500 w-10 flex-shrink m-1">{icon}</div>
                <div className="flex-auto m-1">
                    <div>{this.props.transaction.typeName}</div>
                    <div className="text-xs text-gray-500">{this.props.transaction.securityName}</div>
                    {this.state.open ? (
                    <div className="text-xs  text-gray-500 flex m-1 p-1 space-x-2">
                        <div className="bg-gray-100 flex-autoqqqqqq">{this.props.transaction.extInfo}</div>
                        <div className="bg-gray-100 flex-auto flex">
                            <span className="p-1"><CalendarIcon/></span>
                            <span className="p-1">{this.props.transaction.transactionDate}</span>
                        </div>
                        <div className="bg-gray-100 flex-auto flex">
                            <span className="p-1 text-gray-400"><CalendarCheckIcon/></span>
                            <span className="p-1 text-gray-400 text-right">{this.props.transaction.settlementDate}</span>
                        </div>
                    </div>
                    ) : null}
                </div>
                <div className="flex-shrink m-1 ">{this.props.transaction.currencyCode} {this.props.transaction.tradeAmount.toLocaleString('fi',{ minimumFractionDigits: 2 })}</div>
            </div>
    
            /*
            <div className="flex flex-wrap bg-white rounded-lg shadow-md w-full m-1 p-2 overflow-hidden"> 
                <span className="bg-gray-200 rounded-xl text-3xl text-bold p-4 text-xl w-16"><CashIcon/></span>
                <span className="p-4 flex-grow">
                    <div className="text-xl">{props.transaction.typeName}</div>
                    <div className="text-lg">{props.transaction.securityName}</div>
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
            */
            
        )
        }
}

export default TransactionInList

