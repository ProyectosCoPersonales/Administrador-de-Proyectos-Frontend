import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Asegúrate de importar 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Configuración del alias
    },
  },
});
