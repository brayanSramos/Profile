import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

export default defineConfig({
  // 👇 Cambia USERNAME y REPO_NAME por los tuyos reales
  site: 'https://brayansramos.github.io/Profile',
  base: '/Profile/', // 👈 MUY IMPORTANTE: subcarpeta del repositorio
  output: 'static',
  integrations: [
    tailwind(),
    react(),
  ],
  
});
