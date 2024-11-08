/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
// Types
import type { App } from 'vue';

import router from '@/router';
import pinia from '@/stores';

import auth0 from './auth0';
import vuetify from './vuetify';

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia).use(auth0);
}
