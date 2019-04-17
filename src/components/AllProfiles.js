import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';


class AllProfiles extends React.Component{
    constructor(props){
        super(props)
        this.deleteAcc = this.deleteAcc.bind(this);
      }

    deleteAcc(x){
        const activeUser = x;
        const index = this.props.users.map( x=> x.userId).indexOf(activeUser);

        console.log('provjera indexa: ', index);
        this.props.deleteUser(index);
    }

    render(){
        console.log('All profile: ',this.props);

        this.items = this.props.users.map(
            (user, i) =>    <li  key = {i} > 
                                <h2>
                                    <Link to={`/users/${user.userId}`}>
                                        Profile # {i}
                                    </Link>
                                </h2> 

                                <p> Username: {user.username}, </p>
                                <p> Name: {user.firstName} {user.lastName}, </p>
                                <p> Email: {user.email} </p> 

                                <Button basic color ="red"
                                        size = "huge"
                                        type="button"
                                        onClick={() => this.deleteAcc(user.userId)}>
                                        Delete Account
                                </Button>
                             </li> 
            );

        return(
           
            <div>
                <h1>All profiles</h1>
                <ul class ="allProfiles">
                    {this.items}
                </ul>
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



export default connect(mapStateToProps, mapDispachToProps)(AllProfiles);
