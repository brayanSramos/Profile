import { Card, CardHeader, CardFooter, Button, Image } from "@nextui-org/react";



export default function App({ titlevicamp, descriptionvicamp, linkvicamp, imgavicamp }) {
    return (
        <div className="max-w-[900px] max-h-[310px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
            
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/100 uppercase font-bold">{titlevicamp}</p>
                    <h4 className="text-white/100 font-medium text-xl">{descriptionvicamp}</h4>
                </CardHeader>
                <img className="z-0 w-full h-full object-cover" src="https://nextui.org/images/card-example-5.jpeg" alt="Card background" />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="https://nextui.org/images/breathing-app-icon.jpeg"
                        />
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/60">Link</p>
                            <p className="text-tiny text-white/60">{linkvicamp}</p>
                        </div>
                    </div>
                    <Button radius="full" size="sm">Proyecto</Button>
                </CardFooter>
            </Card>
        </div>
    );
}