
import { useKeycloak } from '@react-keycloak/web'
import axios from "axios";
import { useQuery } from "react-query";
import * as Constants from './constants';
import TransactionInList from './TransactionInList';

function Transactions() {
    const { keycloak } = useKeycloak()

    const { isLoading, error, data } = useQuery("transactions", () => {
        console.log("Calling in transactions " + Constants.API_URL + " with linked contact " + keycloak.idTokenParsed.linked_contact + " and query " +Constants.QUERY_TRANSACTIONS)
        return axios({
          url: Constants.API_URL,
          method: "POST",
          headers: {'Authorization': 'Bearer '+keycloak.token},
          data: {
            query: Constants.QUERY_TRANSACTIONS,
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

       
    return (

<div className="bg-gray-100 font-mono w-full min-h-screen p-6">          
    <header className="bg-white shadow m-2 p-2">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Transactions of {data.contact.name}</h1>
        </div>
    </header>
    <main className="p-2">
        {
            data.contact.transactions.map( transaction => 
                <TransactionInList transaction={transaction}/>
            )
        }  
    </main>
</div>
    )    
}

export default Transactions;