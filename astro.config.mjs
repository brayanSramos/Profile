import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; //Dependecia de Tailwind-👾 
import react from "@astrojs/react";//Dependecia de React-👾

// https://astro.build/config
export default defineConfig({
    // Cambia USERNAME y REPO_NAME por los tuyos
  site: 'https://brayanSramos.github.io/',
  base: '/', // Asegura rutas limpias (sin /Mi-Porfolio/)
  output: 'static',
  integrations: [tailwind(), //Configuracion de Tailwind-👾
  react(),
  ]
});
