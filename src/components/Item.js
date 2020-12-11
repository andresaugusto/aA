import React, { useState, useEffect, useHistory } from 'react';
import { Link } from 'react-router-dom';
import {LoremIpsum } from 'react-lorem-ipsum'
import { motion } from 'framer-motion';

import '../css/List.css'

export function Item({ id }) {


    // const history = useHistory()
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


    const { status, name, img } = characters.find(character => character.char_id === id);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style= {{ ppointerEvents: 'auto' }}
                className='overlay'
                >
                <Link to='/virtual' />
            </motion.div>
            <div className='card-content-container open'>
                <motion.div
                    className='card-content' 
                    layoutId={`card-container-${id}`}
                    >
                    <motion.div 
                        className='card-image-container'
                        layoutId={`card-image-container-${id}`}
                        >
                        <img className='card-image' src={img} alt='' />
                    </motion.div>
                    <motion.div
                        className='title-component'
                        layoutId={`title-container-${id}`}
                        >
                        <span className='status'>{status}</span>
                        <h2>{name}</h2>
                    </motion.div>
                    <motion.div 
                        className='content-container' 
                        animate
                        >
                        <LoremIpsum
                            p={6}
                            avgWordsPerSentence={6}
                            avgSentencePerParagraph={4}
                            />
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}