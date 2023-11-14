/* New cleaned up version of App.js */
import React from 'react';
// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';

import ScrollToTop from './react-components/ScrollToTop';
import Home from './react-components/Home';
import LeeLab from './react-components/LeeLab';

import SocialNetworks from './react-components/SocialNetworks';

import VolunteerTeaching from './react-components/VolunteerTeaching';
import HouseRepresentative from './react-components/HouseRepresentative';

class App extends React.Component {
  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
  state = {
    title: "Rachel's Personal Website",
  }

  render() {
    return (
        <BrowserRouter>
          <ScrollToTop />
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <> { /* avoid non standard props being passed to next dom node */ }
            {/* <ThemeProvider theme={theme}> */}
            {/* <CssBaseline /> */}
            <Route exact path='/' render={() => 
                            (<Home appState={this.state}/>)}/>
            <Route exact path='/about' render={() => 
                            (<Home appState={this.state}/>)}/>
            {/* Projects */}
            {/* <Route exact path='/projects/student-ability' render={() => 
                            (<StudentAbility appState={this.state}/>)}/>
            <Route exact path='/projects/moba-tracker' render={() => 
                            (<MobaTracker appState={this.state}/>)}/>
            <Route exact path='/projects/personal-website' render={() => 
                            (<PersonalWebsite appState={this.state}/>)}/>
            {/* Research */}
            <Route exact path='/research/social-networks' render={() => 
                            (<SocialNetworks appState={this.state}/>)}/>
            {/* Extra Curricular */}
            <Route exact path='/extracurricular/volunteer-teaching' render={() => 
                            (<VolunteerTeaching appState={this.state}/>)}/>
            <Route exact path='/research/lee-lab' render={() => 
                            (<LeeLab />)}/>
            {/* <Route exact path='/extracurricular/house-representative' render={() => 
                            (<HouseRepresentative appState={this.state}/>)}/>  */}
            </>
          </Switch>
        </BrowserRouter>
    );  
  }
}

export default App;
