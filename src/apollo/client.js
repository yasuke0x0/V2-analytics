import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const SUBGRAPH_API_KEY = process.env.REACT_APP_THE_GRAPH_API_KEY

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://gateway.thegraph.com/api/${SUBGRAPH_API_KEY}/subgraphs/id/EYCKATKGBKLWvSfwvBjzfCBmGwYNdVkduYXVivCsLRFu`,
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: `https://gateway.thegraph.com/api/${SUBGRAPH_API_KEY}/subgraphs/id/ESnjgAG9NjfmHypk4Huu4PVvz55fUwpyrRqHF21thoLJ`,
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: `https://gateway.thegraph.com/api/${SUBGRAPH_API_KEY}/subgraphs/id/9A6bkprqEG2XsZUYJ5B2XXp6ymz9fNcn4tVPxMWDztYC`,
  }),
  cache: new InMemoryCache(),
})
