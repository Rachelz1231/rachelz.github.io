/* New cleaned up version of App.js */
import React from 'react';
// Importing react-router-dom to use the React Router
import { Route, Routes, HashRouter } from 'react-router-dom';

import './App.css';
import ScrollToTop from './react-components/ScrollToTop';
import Home from './react-components/Home';
import LeeLab from './react-components/LeeLab';

import SocialNetworks from './react-components/SocialNetworks';

import VolunteerTeaching from './react-components/VolunteerTeaching';

class App extends React.Component {
  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
  state = {
    title: "Rachel's Personal Website",
  }

  render() {
    return (
        <HashRouter>
          <ScrollToTop/>
          <Routes> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <> { /* avoid non standard props being passed to next dom node */ }
            {/* <ThemeProvider theme={theme}> */}
            {/* <CssBaseline /> */}
            {/* Projects */}
            {/* <Route exact path='/projects/student-ability' render={() => 
                            (<StudentAbility appState={this.state}/>)}/>
            <Route exact path='/projects/moba-tracker' render={() => 
                            (<MobaTracker appState={this.state}/>)}/>
            <Route exact path='/projects/personal-website' render={() => 
                            (<PersonalWebsite appState={this.state}/>)}/>
            {/* Research */}
            <Route path="/research/social-networks" element={<SocialNetworks />}></Route>
            {/* Extra Curricular */}
            <Route path="/extracurricular/volunteer-teaching" element={<VolunteerTeaching />}></Route>
            <Route path="/research/lee-lab" element={<LeeLab />}></Route>
            
            {/* <Route exact path='/extracurricular/house-representative' render={() => 
                            (<HouseRepresentative appState={this.state}/>)}/>  */}

            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<Home />}></Route>
            </>
          </Routes>
        </HashRouter>
    );  
  }
}

export default App;
