import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class MenuBar extends React.Component {
  constructor(props){
    super(props);
  }

  state = { activeItem: 'Home'};
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
  render() {
    const { activeItem } = this.state

    return (
      <Menu  pointing secondary id ="menu">
        <Menu.Item as= {Link}
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
          to ="/">

          Home
        </Menu.Item>

        <Menu.Item as= {Link}
          name='addProfile'
          active={activeItem === 'addProfile'}
          onClick={this.handleItemClick}
          to ="/add">

          Add profile
        </Menu.Item>

        <Menu.Item as= {Link}
          name='allProfiles'
          active={activeItem === 'allprofiles'}
          onClick={this.handleItemClick}
          to ="/all">

          All profiles
        </Menu.Item>
      </Menu>
    )
  }
}

export default MenuBar;