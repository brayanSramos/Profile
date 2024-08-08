import { Card, CardHeader, CardFooter, Button, Image } from "@nextui-org/react";
import Crdpy3 from "../components/Crdpy3.jsx";


export default function App({ title, description, link, imga1, imga2, avatar }) {
    return (
        <div className="max-w-[900px] max-h-[310px] gap-2 grid grid-cols-12 grid-rows-2 px-8">

            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <h4 className="text-white/100 font-medium text-2xl">{title}</h4>
                </CardHeader>
                <img className="z-0 w-full h-full object-cover" src={imga1} alt="Card background" />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="https://nextui.org/images/breathing-app-icon.jpeg"
                        />
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/60">Link</p>
                            <p className="text-tiny text-white/60">{link}</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
            
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <img className="rounded-full z-0 w-[20px] h-[20px] object-cover" src={avatar} alt="Card background" />
                </CardHeader>
                <img className="z-0 w-full h-full object-cover" src={imga2} alt="Card background" />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="https://nextui.org/images/breathing-app-icon.jpeg"
                        />
                        <div className="flex flex-col">
                        <p className="text-tiny text-white/100 uppercase font-bold">{description}</p>
                        </div>
                    </div>
                    <Button radius="full" size="sm">Ver</Button>
                </CardFooter>
            </Card>
        </div>
    );
}