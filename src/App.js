import React, { useState, useEffect, useMemo, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { GalleriesContext } from './helperFunctions/GalleriesContext'

import HomeMenu from './components/HomeMenu';
import CreatingImmaterial from './components/CreatingImmaterial';
import VirtualGallery from './components/VirtualGallery';
import PhysicalGallery from './components/PhysicalGallery';

// import FetchGalleries from './helperFunctions/FetchGalleries'

import './App.css';

export default function App() {

    useEffect(() => {
        fetchProjects();
    }, []);

    // const history = useHistory()

    const [projects, setProjects] = useState([]);
    const [virtual, setVirtual] = useState([]);
    const [physical, setPhysical] = useState([]);
    
    const fetchProjects = async () => {
        const projectsData = await fetch(
            'https://fathomless-sands-45081.herokuapp.com/projects'
        )
        const projects = await projectsData.json();
        setProjects(projects)
        // console.log(projects)

        let virtual = [];
        let physical = [];

        
        projects.map((project) => {
            switch (project.gallery) {
                case 'Virtual':
                    if (project.gallery[0]) {
                        virtual.push(project);
                    }
                    break;
                case 'Physical':
                    if (project.gallery[0]) {
                        physical.push(project);
                    }
                    break;
                default: // N/A
            }

            setVirtual(virtual);
            setPhysical(physical);
        })

        
    }


    const providerProjects = useMemo(() => ({ projects, setProjects }), [projects, setProjects])
    const providerPhysical = useMemo(() => ({ physical, setPhysical }), [physical, setPhysical])
    const providerVirtual = useMemo(() => ({ virtual, setVirtual }), [virtual, setVirtual])



    return (
        <div className='App'>
            {/* Navigation */}
            {/* WelcomeAnimation */}
            {/* ROUTED HomeMenu */}
            {/* ROUTED About / CreatingImmaterial */}
            {/* ROUTED VirtualGallery */}
            {/* ROUTED PhysicalGallery */}
            {/* ROUTED PhysicalProject */}
            {/* ROUTED VirtualProject */}
            <Switch>
                <GalleriesContext.Provider value={ providerProjects, providerPhysical, providerVirtual }>
                    <Route exact path='/' component={HomeMenu} />
                    <Route exact path='/creating-immaterial' component={CreatingImmaterial}/>
                    <Route exact path='/virtual' component={VirtualGallery}/>
                    {/* <Route exact path='/virtual/:projectId' component={VirtualProject} /> */}
                    <Route exact path='/physical' component={PhysicalGallery}/>
                    {/* <Route exact path='/physical/:projectId' component={PhysicalProject} /> */}
                </GalleriesContext.Provider>
            </Switch>
        </div>
    );

}
