// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React, { Component } from "react"
import ApolloClient, { gql } from "apollo-boost"
import { Query } from "react-apollo"
import { ApolloProvider } from "react-apollo"



const client = new ApolloClient({
  uri: "http://172.16.101.91:4242/graphql",
})

const GET_CONTINENTS = gql`
query {
    GetAllUsers{     
        ok
        error
        users { 
            email
            username    
        }  
    }
}
`

// export class App extends Component {  
//     render() {
//         return (
//             <p>test</p>
//         )
//     }
// }


function App() {
    return (
        <h1>React + Apollo Client</h1>
    )
  }

export class Continents extends Component {  
    render() {
        return (
            <ApolloProvider client={client}>
                <h1>React + Apollo Client</h1>
                <h2>Continents</h2>
                <Query query={GET_CONTINENTS}>
                    {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error!(</p>
                        return (
                            <div>
                            {data.GetAllUsers.users.map(x => (
                                <h3 key={x.email}>
                                {x.username}:{x.email}
                                </h3>
                            ))}
                            </div>
                        ); 
                    }}
                </Query>
            </ApolloProvider>
        );
    }
}


// function App() {
//     return (
//       <ApolloProvider client={client}>
//         <h1>React + Apollo Client</h1>
//         <Continents />
//       </ApolloProvider>
//     )
//   }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
