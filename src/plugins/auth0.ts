import { createAuth0 } from '@auth0/auth0-vue';

export default createAuth0({
  domain: import.meta.env.VITE_OAUTH_DOMAIN,
  clientId: import.meta.env.VITE_OAUTH_CLIENT_ID,
  authorizationParams: {
    scope: 'profile email',
    redirect_uri: window.location.origin + '/callback',
    audience: import.meta.env.VITE_OAUTH_AUDIENCE,
  },
  useRefreshTokens: true,
  cacheLocation: 'localstorage',
});
