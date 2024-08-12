import React from "react";
import { ScrollShadow, Button } from "@nextui-org/react";
import { Content } from "./Content.jsx";

export default function App() {
    return (
        <section style={{ padding: '15rem 0 15rem' }}>
            <h4 style={{ textAlign: 'center', fontSize: '6rem' }}>Sobre mí</h4>
            <div>
                <ScrollShadow hideScrollBar className="-max-w-[800px] h-[230px]">
                    <Content />
                </ScrollShadow>
                <Button style={{ fontSize: '1rem' }} className="text-center bg-yellow-400">
                    sobre mí
                </Button>
            </div>
        </section>
    );
}