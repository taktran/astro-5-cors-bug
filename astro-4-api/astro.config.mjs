// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      // Not advised (https://vite.dev/config/server-options.html#server-cors), but doing it here for testing
      cors: true
    },
    preview: {
      cors: true
    }
  }
});
