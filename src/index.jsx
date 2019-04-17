import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import'font-awesome-webpack'
import './index.less';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './store/configureStore'

//import custom css
import css from './styles/style.styl';

//import data
import comments from './data/comments';
import posts from './data/posts';
import users from './data/users';



import Routes from './routes/routes';

// Define the initial state properties here
const initialAppState = {
   
      posts,
      comments,
      users
    
  }

const store = configureStore(initialAppState)

class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
              <Routes />
          </BrowserRouter>
        </Provider>
      );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
