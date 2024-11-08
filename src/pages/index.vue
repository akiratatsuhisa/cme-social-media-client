<template>
  {{ result?.ping }}
  {{ subResult?.messageChanged }}
  <v-btn @click="loginWithRedirect">Login</v-btn>
  <v-btn
    variant="outlined"
    @click="variables.roomId = variables.roomId === '1' ? '2' : '1'"
  >
    Switch {{ variables.roomId }}
  </v-btn>
</template>

<script lang="ts" setup>
const { loginWithRedirect } = useAuth0();

const variables = reactive({
  roomId: '1',
});

const { result: subResult, onResult } =
  useMessageChangedSubscription(variables);

const useMessageChangedSubscriber = onResult(({ data }) => {
  console.log(data);
});

onBeforeUnmount(() => {
  useMessageChangedSubscriber.off();
});

const { result } = usePingQuery();
</script>
