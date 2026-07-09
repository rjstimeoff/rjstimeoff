// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The old /timeoff route was promoted to the home page (/).
  redirects: {
    '/timeoff': '/',
    '/base360-landing': '/cove-landing',
  },
});
