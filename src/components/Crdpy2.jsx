import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";

export default function App({ title, description, link, imga, time, avatar, slug }) {
    return (
        <div className="justify-center max-w-[900px] inline-table px-3.5 px-0.989rem">

            <Card className="h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                </CardHeader>
                <img className="z-0 w-full h-full object-cover" src={imga} alt="Card background" />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/100 uppercase font-bold">{description}</p>
                            <h4 className="text-white/100 font-medium text-large">{title}</h4>
                        </div>
                    </div>
                    <Button radius="full" size="sm"><a href={`/posts/${slug}`}>Ver</a></Button>
                </CardFooter>
            </Card>

        </div>
    );
}