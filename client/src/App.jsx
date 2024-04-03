import './app.module.css';
import Homepage from './homepage/homepage.jsx';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httplink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httplink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Homepage/>
    </ApolloProvider>
  );
}

export default App;

