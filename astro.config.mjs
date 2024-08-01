import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; //Dependecia de Tailwind-👾 
import react from "@astrojs/react";//Dependecia de React-👾
import markdown from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), //Configuracion de Tailwind-👾
    react(), markdown()
]
});