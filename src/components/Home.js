import React from "react";
import bgimage from '../lightbg.jpg'

export default function Home(){
    return (
        <main>
            <img src={bgimage} alt="techno bg" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-700 font-bold cursive leading-none lg:leading-snyg home-name">Hi, I am Ahad Khan</h1>
            </section>
        </main>
    );
} 