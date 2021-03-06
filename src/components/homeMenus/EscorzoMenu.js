import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import escorzoWhite from '../../images/escorzo_white.png';

import '../../css/EscorzoMenu.css';
// import '../css/EscorzoMenuAlt.css';

export default function EscorzoMenu() {
    

    return (
        <>
            <motion.div 
                className='creatingImmaterialWrapper'
                whileHover={{ scale: 1.05, duration: .05 }}
                whileTap={{ scale: 0.6 }}
                // onHoverStart={corpusCallosumAnimation}
                // onHoverEnd={setCorpusImageReactions}
                // onClick={corpusCallosumAnimation}
                >
                <svg className='creatingImmaterialSVGCanvas' version="1.1" id="Layer_1" x="0px" y="0px" width="1800px" height="1800px" viewBox="0 0 1800 1800" pointerEvents='visiblePainted'>
                        <Link to='/creating-immaterial' id='creatingImmaterialAbout'>
                        <path id="escorzoSVG" className='creatingImmaterialSVGPath' fill='rgba(255, 166, 0, 0.0)' stroke='transparent' d="M243.277,1197.61c0,0,30.923,4.49,62.101,0c0,0,26.289,0.33,64.399-16.1c0,0,7.071-4.04,9.2-4.601
                            c0,0,7.355-2.63,11.5-4.6c4.144-1.97,20.4-9.25,36.8-18.4c0,0,33.4-18.72,48.3-25.3c14.9-6.58,17.459-5.97,32.2-6.899
                            c0,0,20.594-3.181,34.5-6.9c5.229-1.981,10.614-3.521,16.101-4.6c0,0,22.941-4.471,46,2.3c0,0,22.733,2.439,29.899-2.3
                            c0,0,11.489-5.891,16.101-9.2c0,0,12.912-7.28,20.699-20.7c0,0,8.773-12.73,0-25.3c-8.772-12.57-22.636-31.71-39.1-41.4
                            c0,0-6.772-4.52-27.6-4.6c0,0-11.244-5.78-29.9-11.5c0,0-16-3.681-20.7-4.601c0,0-2.067-5-27.6-36.8c0,0-4.868-9.949-13.8-34.5
                            c0,0-3.393-11.628-20.7-43.7c0,0-0.771-0.6-2.3-6.899c0,0-5.682-14.452-11.5-25.3c-3.182-8.168-5.495-16.648-6.9-25.301
                            c0,0-4.151-2.378,4.6-9.199c0,0,6.487-6.966,34.5-13.801c0,0,66.272-5.359,133.4,6.9c0,0,8.783,1.947,13.8,4.6
                            c0,0,2.921,3.424,36.8,9.2c0,0,4.493-0.043,13.801,4.601c0,0,1.541,1.669,13.8,4.6c0,0,18.09,2.835,52.899,23
                            c0,0,2.686,2.782,43.7,16.1c0,0,13.029,2.493,48.3,18.4c0,0,7.36,3.669,13.801,6.9c0,0,21.341,10.259,36.8,20.699
                            c15.459,10.441,32.573,18.561,50.6,27.601s27.101,17.319,34.5,23c7.4,5.68,19.72,15.437,43.7,27.6
                            c23.979,12.163,25.02,13.176,55.2,29.9c0,0,5.71,3.04,11.5,6.899c0,0,33.5,21.28,39.1,29.9c0,0,3.45,3.83,20.7,27.6
                            c0,0,24.18,22.471,39.1,59.801c0,0,6.85,18.399,39.1,73.6c0,0,21.65,40.4,43.7,52.9c0,0,5.261,4.47,25.3,18.399
                            c0,0,50.351,31.79,87.4,0c0,0,22.21-12.5,43.7-50.6c0,0,6.11-10.94,13.8-23c0,0,12.71-9.601,9.2-57.5
                            c-3.97-54-7.521-62.9-16.101-80.5c0,0,1.49-27.79,41.4-87.4c0,0,66.68-100.474,87.4-128.8c20.72-28.326,48.89-64.971,62.1-87.4
                            c0,0,22.1-31,27.6-92c0,0,1.66-34.343-18.399-85.1c0,0-12.96-35.119-52.9-66.7c0,0-29.56-26.726-96.6-34.5c0,0-34.98-3.962-89.7,2.3
                            c0,0-9.85,2.345-103.5,4.601c0,0-81.2,6.2-142.6,6.899c0,0-31.601,1.674-71.301,0c0,0-56.67-4.853-96.6-4.6c0,0-65.492,1.826-98.9,0
                            c0,0-33.309-2.638-64.399,4.6c0,0-32.667,5.969-59.8,6.9c0,0-17.19-1.686-48.301,6.9c0,0-10.3,3.584-16.1,4.6
                            c0,0-13.008-0.582-29.9,6.9c0,0-27.514,14.84-43.699,18.399c0,0-26.071,6.392-82.801,41.4c0,0-6.226,3.3-9.199,4.6
                            c-2.975,1.3-33.273,16.7-80.5,69c0,0-15.376,16.9-43.7,52.9c0,0,0.3,2.664-23,9.2c-21.101,5.92-31.2,12.2-49.276,21.286
                            c-10.388,5.222-21.882,9-41,22c0,0-16.071,8-47.723,32.613c-34.48,26.812-35.809,30.281-64.399,59.801c0,0-19.991,19.648-29.9,34.5
                            c-9.909,14.851-20.493,29.937-25.3,36.8c0,0-13.873,28.039-18.4,46c-4.1,16.271-10.173,41.676-2.3,78.199
                            c0,0,3.408,20.291,4.6,39.101c0,0,3.601,32.06,18.4,39.1c0,0,2.986,0.73,23,23c18.865,21,27.861,17.851,48.3,29.9
                            C220.277,1193.01,221.3,1194.94,243.277,1197.61z"/>
                    </Link>
                </svg>
                <motion.img className='creatingImmaterialImg' src={escorzoWhite} alt='corpusCallosum'/>  
            </motion.div>
            {/* <div className='outerWrapper'> */} {/* for use with import '../css/HomeMenuAlt.css' */}
                {/* <div className='innerWrapper'> */} {/* for use with import '../css/HomeMenuAlt.css' */}
                    <motion.div className="galleryLinkListener"
                        whileHover={{ scale: 1.05, duration: .05 }}
                        whileTap={{ scale: 0.95 }}
                        >
                        <motion.h1 className='homePhysical'>
                            <Link className='links' to='/physical' id='physicalProjectsGallery'>
                                <span className='bracket'>[</span>physical<span className='bracket'>]</span>
                            </Link>
                        </motion.h1>
                    </motion.div>
                    <motion.div className="galleryLinkListener"
                        whileHover={{ scale: 1.05, duration: .05 }}
                        whileTap={{ scale: 0.95 }}
                        >
                        <h1 className='homeVirtual'>
                            <Link className='links' to='/virtual' id='virtualProjectsGallery'>
                                <span className='bracket'>[</span>virtual<span className='bracket'>]</span>
                            </Link>
                        </h1>
                    </motion.div>
                {/* </div> */} {/* for use with import '../css/HomeMenuAlt.css' */}
            {/* </div> */} {/* for use with import '../css/HomeMenuAlt.css' */}
        </>
    )

}