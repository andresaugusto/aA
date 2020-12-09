import React, { useState, useEffect, useMemo } from 'react'
import { Route, Switch } from 'react-router-dom';
import { GalleriesContext } from './GalleriesContext'

// import HomeMenu from './components/HomeMenu';
// import CreatingImmaterial from './components/CreatingImmaterial';
// import VirtualGallery from './components/VirtualGallery';
// import PhysicalGallery from './components/PhysicalGallery';

import App from '../App'


// export default function FetchGalleries() {

//     useEffect(() => {
//         fetchProjects();
//     }, []);

//     // const history = useHistory()

//     const [projects, setProjects] = useState([]);
//     const [virtual, setVirtual] = useState([]);
//     const [physical, setPhysical] = useState([]);
    
//     const fetchProjects = async () => {
//         const projectsData = await fetch(
//             'https://fathomless-sands-45081.herokuapp.com/projects'
//         )
//         const projects = await projectsData.json();
//         setProjects(projects)
//         // console.log(projects)

//         let virtual = [];
//         let physical = [];

        
//         projects.map((project) => {
//             switch (project.gallery) {
//                 case 'Virtual':
//                     if (project.gallery[0]) {
//                         virtual.push(project);
//                     }
//                     break;
//                 case 'Physical':
//                     if (project.gallery[0]) {
//                         physical.push(project);
//                     }
//                     break;
//                 default: // N/A
//             }
//             setVirtual(virtual);
//             setPhysical(physical);
//         })

//     }

//     const providerProjects = useMemo(() => ({ projects, setProjects }), [projects, setProjects])
//     const providerPhysical = useMemo(() => ({ physical, setPhysical }), [physical, setPhysical])
//     const providerVirtual = useMemo(() => ({ virtual, setVirtual }), [virtual, setVirtual])

//     return (
//         <Switch>
//             <GalleriesContext.Provider value={ providerProjects, providerPhysical, providerVirtual }>
//                 <Route exact path='' component={App}/>
//             </GalleriesContext.Provider>
//         </Switch>
//     )

//     // const {projects, setProjects} = useContext(GalleriesContext);
//     // const {physical, setPhysical} = useContext(GalleriesContext);
//     // const {virtual, setVirtual} = useContext(GalleriesContext);

// }