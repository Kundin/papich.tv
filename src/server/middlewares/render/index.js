import path from 'path'
import React from 'react'
import fetch from 'node-fetch'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { HelmetProvider } from 'react-helmet-async'
import { ChunkExtractor } from '@loadable/server'

import { config } from '../../../config'
import { HtmlDocument } from './HtmlDocument'
import introspectionQueryResultData from '../../graphql/fragmentTypes.json'

const nodeStats = path.resolve(__dirname, '../../../../public/dist/node/loadable-stats.json')
const webStats = path.resolve(__dirname, '../../../../public/dist/web/loadable-stats.json')

export async function render(req, res) {
  const routerContext = {}
  const helmetContext = {}

  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
  })
  const cache = new InMemoryCache({ fragmentMatcher })
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      fetch,
      uri: config.apollo.uri,
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache,
  })

  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats })
  const { default: App } = nodeExtractor.requireEntrypoint()

  const components = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={routerContext}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </StaticRouter>
    </ApolloProvider>
  )

  const webExtractor = new ChunkExtractor({ statsFile: webStats })
  const jsx = webExtractor.collectChunks(components)

  await getDataFromTree(jsx)

  const apolloState = client.extract()
  const html = renderToString(jsx)
  const { helmet } = helmetContext
  const htmlDocument = HtmlDocument({
    html,
    apolloState,
    helmet,
    webExtractor,
  })

  return res.status(routerContext.status || 200).send(htmlDocument)
}
