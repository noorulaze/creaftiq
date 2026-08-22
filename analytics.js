// Vercel Web Analytics Initialization
// Using CDN for static HTML sites (no bundler required)
import { inject } from 'https://cdn.jsdelivr.net/npm/@vercel/analytics@2/dist/index.mjs';

// Initialize Vercel Analytics
// This will track page views and web vitals automatically when deployed on Vercel
inject();
