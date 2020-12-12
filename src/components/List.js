import React, { useState, useEffect, useHistory } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../css/List.css'








const Card = ({ char_id, name, status, img }) => {

    return (
        <li className={`card ${status}`}>
            <div className='card-content-container'>
                <motion.div className='card-content' layoutId={`card-container-${char_id}`}>
                    <motion.div className='card-image-container' layoutId={`card-container-${char_id}`}>
                        <img className='card-image' src={img} alt='' />
                    </motion.div>
                    <motion.div className='name-container' layoutId={`title-container-${char_id}`}>
                        <span className='status'>{status}</span>
                        <h2>{name}</h2>
                    </motion.div>
                </motion.div>
            </div>
            <Link to={char_id} className={`card-open-link`} />
        </li>
    )
}

export function List({ selectedId }) {


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



    return (
        <ul className='card-list'>
            {characters.map(card => (
                <Card key={card.char_id} {...card} isSelected={card.char_id === selectedId} />
            ))}
        </ul>
    )
}