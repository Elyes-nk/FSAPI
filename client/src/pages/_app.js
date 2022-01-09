import '../styles/styles.scss';
import Mainlayout from '../components/layouts/MainLayout'
import {ApolloProvider} from '@apollo/client'
import client from "../../apollo/apollo-client"


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Mainlayout>
        <Component {...pageProps} />
      </Mainlayout>
    </ApolloProvider>
  )
}

export default MyApp
