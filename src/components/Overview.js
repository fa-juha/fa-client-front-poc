
import { useKeycloak } from '@react-keycloak/web'
import axios from "axios";
import { useQuery } from "react-query";
import * as Constants from './constants';
import NumberFormat from 'react-number-format';
import { Area, AreaChart, Brush, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Keyfigure from "./Keyfigure"
import BarChartIcon from './icons/BarChartIcon';
import CashIcon from './icons/CashIcon';
import TrendingUpIcon from './icons/TrendingUpIcon';


function Overview() {
    const { keycloak } = useKeycloak()

    const { data, isLoading, error } = useQuery("portfolios", () => {
        console.log("Calling " + Constants.API_URL + " with linked contact " + keycloak.idTokenParsed.linked_contact)
        return axios({
          url: Constants.API_URL,
          method: "POST",
          headers: {'Authorization': 'Bearer '+keycloak.token},
          data: {
            query: Constants.QUERY_CONTACT,
            variables: {
                contactId: Number(keycloak.idTokenParsed.linked_contact)
            }
          }

        }).then(response => {
            return response.data.data
        });
      });
    
      if (isLoading) return "Loading...";
      if (error) return <pre>{error.message}</pre>;

        const data2 = data.contact.analytics.analysis.data.map( dataPoint => {
            var retVal = { "date": dataPoint.date, "value": dataPoint.indexedValue - 100.0 };
            return retVal;
        }
      );

    return (

<div className="bg-gray-100 font-mono w-full min-h-screen p-6">          
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Overview of {data.contact.name}</h1>
        </div>
    </header>
    <main className="p-6">
        <div className="flex flex-wrap">
            <Keyfigure name="Market value" figure={data.contact.analytics.analysis.figures.marketValue}><BarChartIcon/></Keyfigure>
            <Keyfigure name="Investments" figure={data.contact.analytics.analysis.figures.purchaseValue}><CashIcon/></Keyfigure>
            <Keyfigure name="P/L" figure={data.contact.analytics.analysis.figures.totalProfits}><TrendingUpIcon/></Keyfigure>
        </div>
        <div className="flex flex-wrap">
            <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-2 overflow-hidden sm:max-w-2xl relative">
                <div className="h-96">
                    <h1 className="text-xl font-bold">Performance - 1 year</h1>
                    <ResponsiveContainer height="100%">
                    
                    <AreaChart
                        data={data2}
                        margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey='date' hide='true'/>
                        <YAxis domain={['auto', 'auto']}  tickFormatter={tick => { return tick.toLocaleString(); }}/>
                        <Tooltip
                        wrapperStyle={{
                            borderColor: 'white',
                            boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
                        }}
                        contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                        labelStyle={{ fontWeight: 'bold', color: '#666666' }}
                        />
                        <Area type="monotone" dataKey="value"   dot={false} />

                    </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>          
        </div>
    </main>
</div>
    )    
}

export default Overview;