<template>
  <slot />
</template>

<script setup lang="ts">
import {
  ApolloClient,
  createHttpLink,
  DefaultOptions,
  InMemoryCache,
  split,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { createClient } from 'graphql-ws';

const unauthOperations: Array<string> = ['Ping'];

const router = useRouter();

const { getAccessTokenSilently } = useAuth0();

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_HTTP_API_URL,
});

const authLink = setContext(async (operation, prevContext) => {
  if (unauthOperations.includes(operation.operationName ?? '')) {
    return prevContext;
  }

  const token = await getAccessTokenSilently().catch(() => {
    router.push({ path: '/not-logged', replace: true });
  });

  const { headers, ...rest } = prevContext;

  return {
    ...rest,
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: import.meta.env.VITE_WS_API_URL,
    keepAlive: 10_000,
    connectionParams: async () => {
      console.log('test');
      const token = await getAccessTokenSilently();

      return { Authorization: `Bearer ${token}` };
    },
  }),
);

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink),
);

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link,
  cache,
  defaultOptions,
});

provide(DefaultApolloClient, apolloClient);
</script>
