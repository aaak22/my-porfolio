import React, { useEffect, useState } from "react";
import sanityClient from '../client.js';
// import bgimage from '../lightbg.jpg'
// import plummeria from '../plumeria.jpg'
// import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

export default function Home(){
    const [author,setAuthor] = useState(null);
    useEffect( () =>{
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`)
        .then( (data) => setAuthor(data[0]))
        .catch(console.error);
    });
    if(!author) return <div>Loading.....</div>
    
    return (
        <main className="bg-green-100">
            {/* <img src={plummeria} alt="plummera flow" className="absolute w-full"/> */}
            <div className=" container mx-auto relative md:p-40 p-10">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex justify-center md:p-20 p-2 md:text-left text-center">
                    {/* {console.log(author.authorImage)} */}
                    
                    <img src={author.authorImage} className="rounded md:w-32 md:h-32 lg:w-64 lg:h-64 mr-8" alt={author.name} />
                    <div className="text-lg flex flex-col justify-center">
                    <h1 className="md:text-6xl text-2xl font-bold cursive leading-none lg:leading-snyg home-name text-white md:mt-0 mt-4">Hi, I am Ahad Khan</h1>
                        <h1 className="cursive md:text-2xl text-lg text-green-300 mb-4">
                            {/* Hi, there. I'm {" "} */}
                            <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="md:text-3xl text-xl prose lg:prose-xl text-white ">
                            <BlockContent blocks={author.bio} projectId="x6vc9u7i"  dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
} 