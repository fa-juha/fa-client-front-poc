
import { useKeycloak } from '@react-keycloak/web'
import axios from "axios";
import { useQuery } from "react-query";
import * as Constants from './constants';
import SecurityInList from './SecurityInList';

function Securities() {
    const { keycloak } = useKeycloak()

    const { isLoading, error, data } = useQuery("securities", () => {
        console.log("Calling in transactions " + Constants.API_URL + " with linked contact " + keycloak.idTokenParsed.linked_contact + " and query " +Constants.QUERY_TRANSACTIONS)
        return axios({
          url: Constants.API_URL,
          method: "POST",
          headers: {'Authorization': 'Bearer '+keycloak.token},
          data: {
            query: Constants.QUERY_SECURITIES
          }

        }).then(response => {
            return response.data.data
        });
    });
    
    if (isLoading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;


    return (

<div className="bg-gray-100 font-mono w-full min-h-screen p-6">          
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Securities</h1>
        </div>
    </header>
    <main className="p-2">
        {
            data.securities.map( security => 
                <SecurityInList security={security}/>
            )
        }  
    </main>
</div>
    )    
}

export default Securities;