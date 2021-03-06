import React from "react";
import { NavLink} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar(){
    return (
        <header className="bg-gradient-to-r from-green-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex uppercase">
                    <NavLink to="/" exact 
                    activeClassName="text-white-900"
                    className="inline-flex items-center py-6 px-3 mr-4 text-green-700 hover:text-green-300 md:text-4xl text-2xl font-bold cursive tracking-widest">
                        AK
                    </NavLink>
                    <NavLink to="/projects" 
                    activeClassName="text-white bg-green-500"
                    className="inline-flex items-center font-bold md:text-2xl py-3 px-3 my-4 text-green-700 hover:text-green-300">
                        Projects
                    </NavLink>
                    {/* <NavLink to="/post" 
                    activeClassName="text-red-100 bg-red-700"
                    className="inline-flex items-center py-3 px-3 my-4 text-red-200 hover:text-green-800">
                        Blog Posts
                    </NavLink> */}
                   
                    {/* <NavLink to="/about" 
                    activeClassName="text-red-100 bg-red-700"
                    className="inline-flex items-center py-3 px-3 my-4 text-red-200 hover:text-green-800">
                        About Me
                    </NavLink> */}
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    {/* <SocialIcon url="https://www.youtube.com/"  className="mr-4 text-white" target="_blank" fg="#fff" style={{height: 35, width:35}}/>
                    <SocialIcon url="https://www.facebook.com"  className="mr-4 text-white" target="_blank" fg="#fff" style={{height: 35, width:35}}/> */}
                    <SocialIcon url="https://www.linkedin.com/in/abdul-ahad-khan-a25951201/"  className="mr-4 text-white" target="_blank" fg="#fff" style={{height: 35, width:35, color:'#fff'}}/>
                </div>
            </div>
        </header>
    );
} 