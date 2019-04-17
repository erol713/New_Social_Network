import React from 'react';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Photogrid from '../components/Photogrid';
import Single from '../components/Single';
import Main from '../components/Main';
import Edit from '../components/Edit';
import Profile from '../components/Profile';
import AllProfiles from '../components/AllProfiles';
import AddProfile from '../components/AddProfile';






class Routes extends React.Component {
  render() {
      return (
        <React.Fragment>
          <Main />
          <Route exact path="/" component={Photogrid} />
          <Route exact path="/view/:postId" component={Single} />
          <Route exact path="/users/:userId" component={Profile} />
          <Route exact path="/edit/:userId" component={Edit} />
          <Route exact path="/add" component={AddProfile} />
          <Route exact path="/all" component={AllProfiles} />




        </React.Fragment>
      );
  }
}

export default Routes;