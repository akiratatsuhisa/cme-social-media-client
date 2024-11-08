// import _ from 'lodash';

// import { useModalsStore } from '@/store';

// import { useHistoryState } from './useRouter';

// export function useModalCallback<
//   TSuccess = any,
//   TError = any,
//   TPickedData = any,
// >() {
//   const { modalEventsContainer } = useModalsStore();
//   const historyState = useHistoryState();

//   function handle<
//     T extends TSuccess | TError | TPickedData | undefined = undefined,
//   >(callbackName: 'onClose' | 'onSuccess' | 'onError' | 'onPick') {
//     return (params?: T) => {
//       const key = historyState.value.key;

//       if (_.isUndefined(key)) {
//         return;
//       }

//       modalEventsContainer[key][callbackName]?.(params);
//     };
//   }

//   return {
//     onClose: handle<undefined>('onClose'),
//     onSuccess: handle<TSuccess>('onSuccess'),
//     onError: handle<TError>('onError'),
//     onPick: handle<TPickedData>('onPick'),
//   };
// }
