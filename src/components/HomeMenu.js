import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { motion, useCycle, AnimatePresence, useTransform, useMotionValue } from 'framer-motion';

import EscorzoPath from './paths/EscorzoPath.js'
import FetchGalleries from '../helperFunctions/FetchGalleries.js'

import escorzoWhite from '../images/escorzo_white.png';
import escorzoBlack from '../images/escorzo_black.png';
import escorzoPlatinum from '../images/escorzo_platinum.png';

import '../css/HomeMenu.css';
// import '../css/HomeMenuAlt.css';

export default function HomeMenu() {

    // FetchGalleries()
    
    return (
        <>
            {EscorzoPath()}
        </>
    )
};