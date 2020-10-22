import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import HomeMenu from './components/HomeMenu';
import CreatingImmaterial from './components/CreatingImmaterial';
import VirtualGallery from './components/VirtualGallery';
import PhysicalGallery from './components/PhysicalGallery';

export default function App() {
    return (
        <div className='App'>
            {/* WelcomeAnimation */}
            {/* HomeMenu */}
            {/* Navigation */}
            {/* About / CreatingImmaterial */}
            {/* ROUTED VirtualGallery */}
            {/* ROUTED PhysicalGallery */}
            {/* ROUTED PhysicalProject */}
            {/* ROUTED VirtualProject */}
            <Switch>
                <Route exact path='/' component={HomeMenu} />
                <Route exact path='/creating-immaterial' component={CreatingImmaterial} />
                <Route exact path='/virtual' component={VirtualGallery} />
                {/* <Route exact path='/virtual/:projectId' component={VirtualProject} /> */}
                <Route exact path='/physical' component={PhysicalGallery} />
                {/* <Route exact path='/physical/:projectId' component={PhysicalProject} /> */}
            </Switch>
            
        </div>
    );
}
