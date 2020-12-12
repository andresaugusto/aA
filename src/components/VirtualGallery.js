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




    // //TEMPORARY DATA

    // const history = useHistory()

    // useEffect(() => {
    //     fetchCharacters();
    //     getRandomIntegers();
    // }, []);

    // const [characters, setCharacters] = useState([]);

    // const fetchCharacters = async () => {
    //     const charactersData = await fetch(
    //         'https://www.breakingbadapi.com/api/characters'
    //     );

    //     const characters = await charactersData.json();
    //     setCharacters(characters);
    // };

    // // console.log(characters) 




    // MERGED FOR CHARACTER QUANTITY DECISION

    const history = useHistory()

    useEffect(() => {
        fetchCharactersAndRandomIntegers();
    }, []);

    const [characters, setCharacters] = useState([]);
    const [randomIntegers, setRandomIntegers] = useState([]);

    const fetchCharactersAndRandomIntegers = async () => {




        const charactersData = await fetch(
            'https://www.breakingbadapi.com/api/characters'
        );

        const characters = await charactersData.json();
        setCharacters(characters);


        // to keep at 5 items
        while (characters.length > 5) {
            characters.pop()
        }

        const characterQuantity = characters.length;
        console.log(characterQuantity);



        
        let randomIntegers = [];

        for (let i = 0; i < characterQuantity; i++) {
            let min = Math.ceil(0);
            let max = Math.floor(50);
            let last = ((characterQuantity) - 1);
            if (i === 0 || i === last) {
                randomIntegers.push(Math.floor((max - min) / 2))
                // randomIntegers.push('first or last')
            } else {
                randomIntegers.push(Math.floor(Math.random() * (max - min)) + min)
            }
        }

        setRandomIntegers(randomIntegers);

        console.log(randomIntegers)




    };




    // // RANDOM SIDEWAYS POSITIONING

    // useEffect(() => {
    //     getRandomIntegers();
    // }, []);

    // const [randomIntegers, setRandomIntegers] = useState([]);

    // function getRandomIntegers() {
    //     let randomIntegers = [];

    //     for (let i = 0; i < 5; i++) {
    //         let min = Math.ceil(10);
    //         let max = Math.floor(70);
    //         randomIntegers.push(Math.floor(Math.random() * (max - min)) + min);
    //     }

    //     setRandomIntegers(randomIntegers);

    //     console.log(randomIntegers)
    // }


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
            <div className='gallery-holder'>
                 <div className='collage-holder'>
                     {characters.map((character, i) => (
                        <div key={character.char_id}                 
                            className='color-collage'
                            id={`cc${i + 1}`}
                            style={{
                                // marginLeft: `${randomIntegers[i]}%`
                            }}>
                            <a className='image-link' 
                                style={{cursor: 'pointer'}}
                                onClick={(e) => {
                                    e.preventDefault();
                                    history.pushState(`/projects/${character.char_id}`);
                                }}>
                                    <motion.img
                                        whileHover={{ scale: 1.01, duration: .1 }}
    									whileTap={{ scale: 0.99 }}
    									key={character.char_id}
    									className='image-in-collage'
    									src={character.img}
    									alt={character.name}
                                    />
                            </a>
                        </div>
                    ))}
                 </div>
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