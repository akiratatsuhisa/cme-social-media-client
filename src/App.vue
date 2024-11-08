<template>
  <template v-if="isLoading">
    <div>Loading</div>
  </template>

  <template v-else>
    <ApolloProvider>
      <router-view />
    </ApolloProvider>
  </template>
</template>

<script lang="ts" setup>
import ApolloProvider from './components/ApolloProvider.vue';

const { isLoading } = useAuth0();
</script>
