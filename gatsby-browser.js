import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import fetch from 'isomorphic-fetch'
import './src/styles/global.css'

const client = new ApolloClient({
	link: new HttpLink({
		uri: 'https://obliging-unicorn-77.hasura.app/v1/graphql',
		fetch,
	}),
	cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => (
	<ApolloProvider client={client}>{element}</ApolloProvider>
)
