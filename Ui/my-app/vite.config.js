// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',  // Allows access from network
    port: 3000,       // Specify the port number
    https: false      // Disable HTTPS
  }
});