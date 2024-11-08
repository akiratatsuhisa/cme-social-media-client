import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: string; output: string; }
  ISODateTime: { input: string; output: string; }
};

export type BaseNode = {
  createdAt: Scalars['ISODateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdUser: User;
  updatedAt: Scalars['ISODateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedUser: User;
};

export type Message = BaseNode & {
  __typename?: 'Message';
  author: User;
  authorId: Scalars['String']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISODateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdUser: User;
  id: Scalars['String']['output'];
  mediaCount?: Maybe<Scalars['Float']['output']>;
  room: Room;
  roomId: Scalars['String']['output'];
  type: MessageType;
  updatedAt: Scalars['ISODateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedUser: User;
};

/** Determine the type of message in the room */
export enum MessageType {
  Audios = 'Audios',
  Files = 'Files',
  Icons = 'Icons',
  Images = 'Images',
  Link = 'Link',
  None = 'None',
  Text = 'Text',
  Videos = 'Videos'
}

export type Mutation = {
  __typename?: 'Mutation';
  addMessage: Message;
};

export type Query = {
  __typename?: 'Query';
  ping: Scalars['String']['output'];
};

export type Room = BaseNode & {
  __typename?: 'Room';
  coverUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISODateTime']['output'];
  createdBy: Scalars['String']['output'];
  createdUser: User;
  id: Scalars['String']['output'];
  isGroup: Scalars['Boolean']['output'];
  lastActivatedAt?: Maybe<Scalars['ISODateTime']['output']>;
  name: Scalars['String']['output'];
  photoUrl?: Maybe<Scalars['String']['output']>;
  themeSource?: Maybe<Scalars['Float']['output']>;
  themeStyle?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISODateTime']['output'];
  updatedBy: Scalars['String']['output'];
  updatedUser: User;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageChanged: Message;
};


export type SubscriptionMessageChangedArgs = {
  roomId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  familyName?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  picture: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type MessageChangedSubscriptionVariables = Exact<{
  roomId: Scalars['String']['input'];
}>;


export type MessageChangedSubscription = { __typename?: 'Subscription', messageChanged: { __typename?: 'Message', id: string, authorId: string, author: { __typename?: 'User', id: string, name?: string | null } } };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };


export const MessageChangedDocument = gql`
    subscription MessageChanged($roomId: String!) {
  messageChanged(roomId: $roomId) {
    id
    authorId
    author {
      id
      name
    }
  }
}
    `;

/**
 * __useMessageChangedSubscription__
 *
 * To run a query within a Vue component, call `useMessageChangedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageChangedSubscription` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the subscription
 * @param options that will be passed into the subscription, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/subscription.html#options;
 *
 * @example
 * const { result, loading, error } = useMessageChangedSubscription({
 *   roomId: // value for 'roomId'
 * });
 */
export function useMessageChangedSubscription(variables: MessageChangedSubscriptionVariables | VueCompositionApi.Ref<MessageChangedSubscriptionVariables> | ReactiveFunction<MessageChangedSubscriptionVariables>, options: VueApolloComposable.UseSubscriptionOptions<MessageChangedSubscription, MessageChangedSubscriptionVariables> | VueCompositionApi.Ref<VueApolloComposable.UseSubscriptionOptions<MessageChangedSubscription, MessageChangedSubscriptionVariables>> | ReactiveFunction<VueApolloComposable.UseSubscriptionOptions<MessageChangedSubscription, MessageChangedSubscriptionVariables>> = {}) {
  return VueApolloComposable.useSubscription<MessageChangedSubscription, MessageChangedSubscriptionVariables>(MessageChangedDocument, variables, options);
}
export type MessageChangedSubscriptionCompositionFunctionResult = VueApolloComposable.UseSubscriptionReturn<MessageChangedSubscription, MessageChangedSubscriptionVariables>;
export const PingDocument = gql`
    query Ping {
  ping
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a Vue component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePingQuery();
 */
export function usePingQuery(options: VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<PingQuery, PingQueryVariables>(PingDocument, {}, options);
}
export function usePingLazyQuery(options: VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<PingQuery, PingQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, {}, options);
}
export type PingQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<PingQuery, PingQueryVariables>;