import React from 'react';
import '../css/HomeMenu.css';

export default function HomeMenu() {
    return (
        <>
            <h1 className='homePhysical'>physical</h1>
            <h1 className='homeVirtual'>virtual</h1>
            <div>
                <img src='/public/images/corpus/escorzo/escorzo_white.png' alt='corpusCallosum' className='homeCorpus'/>
            </div>
        </>
    )
};