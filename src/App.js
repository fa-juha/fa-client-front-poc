import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './components/Keycloak'
import Transactions from './components/Transactions'
import Overview from './components/Overview'
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar2 from './components/Navbar2';
import Securities from './components/Securities';

const client = new QueryClient();

const keycloakProviderInitConfig = {
  onLoad: 'login-required',
}

class App extends React.PureComponent {
  onKeycloakEvent = (event, error) => {
    console.log('onKeycloakEvent', event, error)
  }

  onKeycloakTokens = (tokens) => {
    console.log('onKeycloakTokens', tokens)
  }

  render() {
    return (
      <ReactKeycloakProvider 
        authClient={keycloak} 
        initOptions={keycloakProviderInitConfig}
        onEvent={this.onKeycloakEvent}
        onTokends={this.onKeycloakTokens}
        >
          <QueryClientProvider client={client}>
            <BrowserRouter>
              <Navbar2 />
              <Route path="/overview" component={Overview}/>
              <Route path="/transactions" component={Transactions}/>
              <Route path="/home" component={Overview}/>
              <Route path="/securities" component={Securities}/>
            </BrowserRouter>
        </QueryClientProvider>
      </ReactKeycloakProvider>
    );  
  }
}

export default App;