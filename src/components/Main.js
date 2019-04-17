import React from 'react';
import {Link} from 'react-router-dom';
import MenuBar from './menu/menu';


class Main extends React.Component{
    render(){
        return(
            <div>
                <Link to="/"><h1>New Social Media</h1></Link>
                <MenuBar />
                
            </div>
        )
    }
}

export default Main;