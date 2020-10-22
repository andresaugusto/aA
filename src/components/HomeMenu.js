import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// import '../css/HomeMenu1.css';
import '../css/HomeMenu2.css';

export default function HomeMenu() {
    return (
        <>
            {/* <div className='outerWrapper'> */}
                {/* <div className='innerWrapper'> */}
                    <h1 className='homePhysical'>
                        <Link className='links' to='/physical'>
                            <span className='bracket'>[</span>physical<span className='bracket'>]</span>
                        </Link>
                    </h1>
                    <h1 className='homeVirtual'>
                        <Link className='links' to='/virtual'>
                            <span className='bracket'>[</span>virtual<span className='bracket'>]</span>
                        </Link>
                    </h1>
                {/* </div> */}
            {/* </div> */}
            <div>
                {/* <Link to='/creating-immaterial'>
                    <img className='homeCorpus' src={window.location.origin + '/images/corpus/escorzo/escorzo_white.png'} alt='corpusCallosum'/>
                </Link> */}
                <a>
                    <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{
                        delay: 2,
                        duration: 0.5,
                    }}>
                    <a
                        to='/creating-immaterial'>
                        <motion.img
                            whileHover={{ scale: 1.1, duration: 0.5 }}
                            whileTap={{ scale: 0.9, duration: 0.2 }}
                            className='homeCorpus'
                            src={window.location.origin + '/images/corpus/escorzo/escorzo_white.png'}
                            alt='CorpusCallosum'
                        />
                    </a>
                </motion.div>
                </a>
            </div>
        </>
    )
};