import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index';

class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.renderComment = this.renderComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };
    renderComment(comment, i){
        return(
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>

                    {comment.text}
                    
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.match.params.postId, i)} >
                        &times;
                    </button>
                </p>
            </div>
        )
    }

   

    handleSubmit(e){
        e.preventDefault();
        const{ postId } = this.props.match.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }


    render() {
        console.log('comments: ' , this.props.post);
        return(
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text"  ref="author" placeholder="author"/>
                    <input type="text"  ref="comment" placeholder="comment"/>
                    <input type="submit"  hidden />
                </form>
            </div>
        )
    }
};

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



export default connect(mapStateToProps, mapDispachToProps)(Comments);