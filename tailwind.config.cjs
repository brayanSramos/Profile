// tailwind.config.cjs
const { nextui } = require("@nextui-org/react");


module.exports = {
    content: [
        //lector de archivos Tailwind en ASTRO-👾
        './src/**/*/*.{astro,html,js,jsx}',
        // make sure it's pointing to the ROOT node_module
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme:{
        extend:{

        }
    },
    //Mas poderes para Tailwind-👾
    darkMode: "class",
    plugins:[
        nextui()  
    ]
}