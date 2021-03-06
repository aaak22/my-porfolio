//import project from "../../studio/schemas/project";
import React , {useEffect, useState} from "react";
import sanityClient from '../client.js';


export default function Project(){
    const [projectData, setProjectData] = useState(null);
    
    useEffect( () =>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            'image': image.asset->url,
            date,
            place,
            description,
            projectType,
            link,
            tags,

        }`).then( (data) => setProjectData(data))
        .catch(console.error);
    },[]);
    console.log(projectData)
    return(
        <main className="bg-green-100 min-h-screen md:p-12 p-5">
            <section className="container mx-auto">
                <h1 className="text-5xl font-bold text-green-900 flex justify-center cusrsive">My Projects</h1>
                <section className="grid md:grid-cols-2 gap-8 md:p-20 pt-10">
                    {projectData && projectData.map( (project,index) => (
                    <article key={index} className="relative rounded-lg shadow-xl bg-white md:p-16 p-5">
                        
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a 
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                            >{project.title}</a>
                        </h3>
                        <img src={project.image} alt={project.title} />
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>: {" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company </strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>: {" "}
                                {project.projectType}    
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                            <a 
                                href={project.link} rel="noopener noreferrer" target="_blank"
                                className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl" 
                            >
                            View The Project{" "}
                            <span role="img" aria-label="right pointer">
                                
                            </span></a>
                        </div>
                    </article>
                    )) }
                </section>
            </section>
        </main>
    );
} 