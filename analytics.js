// Vercel Web Analytics Initialization
// Using unpkg CDN for static HTML sites
import { inject } from 'https://unpkg.com/@vercel/analytics@1/dist/index.mjs';

try {
  inject();
} catch (e) {
  // Analytics failed or blocked by client
}

