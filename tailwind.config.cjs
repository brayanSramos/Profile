import { color } from "framer-motion";

// tailwind.config.cjs
const { nextui } = require("@nextui-org/react");


module.exports = {
    content: [
        //lector de archivos Tailwind en ASTRO-👾
        './src/**/*/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
        // make sure it's pointing to the ROOT node_module
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,md,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                "vag-rundschrift-d": ["'Vag Rundschrift D'"],
                yellow: {
                    900: "#e5e52e",
                },
            }
        },
    },
    //Mas poderes para Tailwind-👾
    darkMode: "class",
    plugins: [
        nextui()
    ]
}