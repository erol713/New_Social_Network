import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index';
import Photo from './Photo';

class Photogrid extends React.Component{
    render(){
        console.log('Photogrid props: ', this.props);
        return(
            <div className="photo-grid">
                {this.props.posts.map(
                    (post, i) => <Photo {...this.props} key= {i} i = {i} post= {post}  />
                    )}
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



export default connect(mapStateToProps, mapDispachToProps)(Photogrid);
