// Plugins
import { fileURLToPath, URL } from 'node:url';

import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Fonts from 'unplugin-fonts/vite';
import Components from 'unplugin-vue-components/vite';
// Utilities
import { defineConfig, loadEnv } from 'vite';
import Layouts from 'vite-plugin-vue-layouts';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      Layouts(),
      AutoImport({
        imports: [
          'vue',
          {
            'vue-router': ['useRoute', 'useRouter'],
          },
          {
            '@auth0/auth0-vue': ['useAuth0'],
          },
        ],
        dirs: ['./src/composables/**', './src/helpers/**', './src/graphql/**'],
        dts: 'src/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
        },
        vueTemplate: true,
      }),
      Components({
        dts: 'src/components.d.ts',
      }),
      Vue({
        template: { transformAssetUrls },
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
      Vuetify({
        autoImport: true,
        styles: {
          configFile: 'src/styles/settings.scss',
        },
      }),
      Fonts({
        google: {
          families: [
            {
              name: 'Roboto',
              styles: 'wght@100;300;400;500;700;900',
            },
          ],
        },
      }),
    ],
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    server: {
      port: parseInt(env.VITE_PORT),
    },
  };
});
