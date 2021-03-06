import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo'
import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';
import { AppWrapper } from '../pages/state.js';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </ApolloProvider>
    </UserProvider>
  )
}
