import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; //Dependecia de Tailwind-👾 
import react from "@astrojs/react";//Dependecia de React-👾
import vercel from '@astrojs/vercel/serverless';// vercer despliege

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), //Configuracion de Tailwind-👾
  react(),
  ],
  output: 'server',
  adapter: vercel(),
});