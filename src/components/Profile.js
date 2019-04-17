import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index';
import Photo from './Photo';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';


class Profile extends React.Component{

    render(){
        console.log('profile: ',this.props);


        const {userId} = this.props.match.params;
        
        const filtered = this.props.posts.filter(
            (posts) => posts.userId === userId );

        let name = this.props.users.filter(
             (users) => users.userId === userId );
        
        const link = { 
            pathname: `/edit/${name[0].userId}`,
            param1: name[0].userId
        };

        return(
            <div>
                <h1>
                    Hi {name[0].username} 
                    <Link to ={link} > 
                        <Button id="editBtn" size = "massive" basic color ="blue" >
                            Edit Profile 
                         </Button>
                    </Link>
                </h1>

                    

                <div className="photo-grid">                    

                    {filtered.map(
                        (post, i, userId) => <Photo {...this.props} key= {i} i = {i} post= {post} user={post.userId} />
                        )}

                </div>
            </div>
        )
    }
}



function mapStateToProps(state){
    return {
        posts: state.posts,
        comments: state.comments,
        users: state.users
    }
}

function mapDispachToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);

}



export default connect(mapStateToProps, mapDispachToProps)(Profile);
