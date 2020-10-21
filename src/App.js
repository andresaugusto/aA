import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import HomeMenu from './components/HomeMenu';

function App() {
    return (
        <div className='App'>
            {/* WelcomeAnimation */}
            {/* HomeMenu */}
            {/* Navigation */}
            {/* ROUTED VirtualGallery */}
            {/* ROUTED PhysicalGallery */}
            {/* ROUTED PhysicalProject */}
            {/* ROUTED VirtualProject */}
            <Switch>
                <Route exact path='/' component={HomeMenu} />
                {/* <Route exact path='/virtual' component={VirtualGallery} /> */}
                {/* <Route exact path='/virtual/:projectId' component={VirtualProject} /> */}
                {/* <Route exact path='/physical' component={PhysicalGallery} /> */}
                {/* <Route exact path='/physical/:projectId' component={PhysicalProject} /> */}
            </Switch>
            
        </div>
    );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
