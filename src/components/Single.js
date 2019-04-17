import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component{
    render(){

        const {postId} = this.props.match.params;
        
        const i = this.props.posts.findIndex((post) =>
         post.code === postId);
        const post = this.props.posts[i];

        const postComments = this.props.comments[postId] || [];       
        
        console.log('single: ', this.props);
        return(
          
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments = {postComments}{...this.props}/>
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



export default connect(mapStateToProps, mapDispachToProps)(Single);
