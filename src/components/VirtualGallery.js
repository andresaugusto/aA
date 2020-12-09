/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GalleriesContext } from '../helperFunctions/GalleriesContext';

import '../css/VirtualGallery.css'


export default function VirtualGallery() {



    // ORIGINAL


    // const history = useHistory()
    // const {virtual, setVirtual} = useContext(GalleriesContext);

    // return (
    //     <>
    //         <div className='galleryHolder'>
    //             {virtual.map((virtual) => (
    //                 <div key={virtual.title}>
    //                     <a className='image-link' 
    //                         style={{cursor: 'pointer'}}
    //                         onClick={(e) => {
    //                             e.preventDefault();
    //                             history.pushState(`/projects/${virtual.id}`);
    //                         }}>
    //                             <motion.img
    //                                 whileHover={{ scale: 1.005, duration: .1 }}
	// 								whileTap={{ scale: 0.999 }}
	// 								key={virtual.id}
	// 								className='image-in-collage'
	// 								src={virtual.image1}
	// 								alt={virtual.title}
    //                             />
    //                     </a>
    //                 </div>
    //             ))}
    //         </div>
    //     </>
    // )




    //TEMPORARY DATA

    const history = useHistory()

    useEffect(() => {
        fetchCharacters();
    }, []);

    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        const charactersData = await fetch(
            'https://www.breakingbadapi.com/api/characters'
        );
        const characters = await charactersData.json();
        setCharacters(characters);
    };

    console.log(characters)

    return (
        // <>
        //     <h3 className='page-title'>Characters</h3>
        //     {characters.map((character) => (
        //         <h5 key={character.char_id}>
        //             <Link className='names-list' to={`/characters/${character.char_id}`}>
        //                 {character.name}
        //             </Link>
        //         </h5>
        //     ))}
        // </>

        <>
            <div className='galleryHolder'>
                 {characters.map((character) => (
                    <div key={character.char_id}>
                        <a className='image-link' 
                            style={{cursor: 'pointer'}}
                            onClick={(e) => {
                                e.preventDefault();
                                history.pushState(`/projects/${character.char_id}`);
                            }}>
                                <motion.img
                                    whileHover={{ scale: 1.005, duration: .1 }}
									whileTap={{ scale: 0.999 }}
									key={character.char_id}
									className='image-in-collage'
									src={character.img}
									alt={character.name}
                                />
                        </a>
                    </div>
                ))}
            </div>
        </>
    );




}

{/* <h1 style="text-align:center;padding:5vmin;border-style:solid;border-top:white;border-left:white;border-right:white;margin:2vmin;">
    Shoe News
</h1>

<ul style="padding-inline-start:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(26vmin, 1fr));margin:1vmin;">
    {{#each articles}}
    <li style="list-style:none;background:#f9f9f9;padding:1vmin;margin:2vmin;">
        <a style="font-weight:600;color:black;" href='/news/{{this.id}}'>{{this.title}}</a>
        <p style="color:grey;">Posted at: {{this.createdAt}}</p>
        <p style="color:grey;">Last Updated: {{this.updatedAt}}</p>
        <img style="width:100%;" src={{this.imgUrl}} alt="{{this.imgUrl}}">
        <a style="color:grey;display:block;text-align:center;" href="/news/edit/{{this.id}}">Edit This Story</a>
        <form action="/news/{{this.id}}?_method=delete" method="post">
            <input type="submit" value="Remove" />
        </form>
    </li>
    {{/each}}
</ul>

<form style="text-align:center;padding:5vmin;" method="get" action="/news/new">
    <button style="border-width:2vmin;border-color:rgba(255, 98, 0, 0.954)" type="submit">Add New Story</button>
</form> */}