import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { loadableReady } from '@loadable/component'

import introspectionQueryResultData from '../server/graphql/fragmentTypes.json'
import { config } from '../config'
import { App } from './components'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})
const cache = new InMemoryCache({ fragmentMatcher }).restore(window.__APOLLO_STATE__)
const client = new ApolloClient({
  link: createUploadLink({
    uri: config.apollo.uri,
    credentials: 'same-origin',
  }),
  cache,
})

loadableReady(() => {
  hydrate(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root'),
  )
})

if (module.hot) {
  module.hot.accept()
}
