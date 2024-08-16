import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";


// Usar Astro.glob para obtener todos los archivos Markdown en la carpeta content
//const allPosts = await Astro.glob('../content/*.md');

export default function App({title, description, image}) {
    return (

        <div className="justify-center max-w-[900px] inline-table px-3.5 px-0.989rem">

            <Card className="h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-right text-white uppercase font-bold">{title}</p>
                    <h4 className="text-white/100 font-medium text-large">{description}</h4>
                </CardHeader>
                <img className="z-0 w-full h-full object-cover" src={image} alt="Card background" />
            </Card>
            
        </div>

    )
}