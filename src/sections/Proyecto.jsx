import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";



export default function App() {
    return (
        <section style={{ padding: '15rem 0 15rem' }}>
            <div>
                <h4 style={{ textAlign: 'center', fontSize: '6rem' }}>Proyectos 👾</h4>
            </div>
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">

                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-right text-white/100 uppercase font-bold ">AgroSys 🌱</p>
                        <h4 className="text-white/100 font-medium text-large">App para precios de productos agropecuarios</h4>
                    </CardHeader>
                    <img className="z-0 w-full h-full object-cover" src="https://nextui.org/images/card-example-4.jpeg" alt="Card background" />
                </Card>

                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-right text-white uppercase font-bold">Plant a tree</p>
                        <h4 className="text-white/100 font-medium text-large">Contribute to the planet</h4>
                    </CardHeader>
                    <img className="z-0 w-full h-full object-cover" src="https://nextui.org/images/card-example-3.jpeg" alt="Card background" />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/100 uppercase font-bold">Supercharged</p>
                        <h4 className="text-white/100 font-medium text-large">Creates beauty like a beast</h4>
                    </CardHeader>
                    <img className="z-0 w-full h-full object-cover" src="https://nextui.org/images/card-example-2.jpeg" alt="Card background" />
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/100 uppercase font-bold">New</p>
                        <h4 className="text-white/100 font-medium text-2xl">Acme camera</h4>
                    </CardHeader>
                    <img className="z-0 w-full h-full object-cover" src="https://nextui.org/images/card-example-6.jpeg" alt="Card background" />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/20 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            proyecto
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/100 uppercase font-bold">Your day your way</p>
                        <h4 className="text-white/100 font-medium text-xl">Your checklist for better sleep</h4>
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
                                <p className="text-tiny text-white/60">Breathing App</p>
                                <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                            </div>
                        </div>
                        <Button radius="full" size="sm">Proyecto</Button>
                    </CardFooter>
                </Card>


                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-right text-white/100 uppercase font-bold ">AgroSys 🌱</p>
                        <h4 className="text-white/100 font-medium text-large">App para precios de productos agropecuarios</h4>
                    </CardHeader>
                    <img className="z-0 w-full h-full object-cover" src="https://nextui.org/images/card-example-4.jpeg" alt="Card background" />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-right text-white uppercase font-bold">Plant a tree</p>
                        <h4 className="text-white/100 font-medium text-large">Contribute to the planet</h4>
                    </CardHeader>
                    <img className="z-0 w-full h-full object-cover" src="https://nextui.org/images/card-example-3.jpeg" alt="Card background" />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/100 uppercase font-bold">Supercharged</p>
                        <h4 className="text-white/100 font-medium text-large">Creates beauty like a beast</h4>
                    </CardHeader>
                    <img className="z-0 w-full h-full object-cover" src="https://nextui.org/images/card-example-2.jpeg" alt="Card background" />
                </Card>






            </div>
        </section>
    );
}