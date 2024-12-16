import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      watch: {
        usePolling: true, // Útil si hay problemas de caché local
        interval: 100,    // Ajusta el intervalo de actualización
      },
      hmr: {
        overlay: true, // Muestra errores en la consola del navegador
      },
    },
    optimizeDeps: {
      include: ['sweetalert2'], // Optimiza manualmente ciertas dependencias
    },
  },
});
