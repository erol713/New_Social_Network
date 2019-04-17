import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Icon, Label } from 'semantic-ui-react';
import { CSSTransitionGroup } from 'react-transition-group' ;


class Photo extends React.Component{
    render(){
        const { post, i, comments } = this.props;
        let count = post.likes - post.dislikes ;
        
        return(
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo" />
                    </Link>

                    <CSSTransitionGroup transitionName="like" 
                                        transitionEnterTimeout={500}
                                        transitionLeaveTimeout={500} >
                        <span key={post.likes} className="likes-heart">{count}</span>
                    </CSSTransitionGroup>

                    <CSSTransitionGroup transitionName="like" 
                                        transitionEnterTimeout={500}
                                        transitionLeaveTimeout={500} >
                        <span key={post.dislikes} className="dislikes-heart">{count}</span>
                    </CSSTransitionGroup>

                </div>

                <figcaption>
                    <p>{post.caption}</p>

                    <div > 
                        <Button.Group icon>
                        <Button size="large"   as='div' labelPosition='right'>
                            <Button color="red" onClick={this.props.increment.bind(null, i)} icon>
                                <Icon name='thumbs up' />
                            </Button>                                               
                        </Button>

                        <Label size="large" >
                                {count}
                        </Label> 

                        <Button size="large"  as='div' labelPosition='left'>
                            <Button color="blue" onClick={this.props.dislike.bind(null, i)} icon>
                                <Icon name='thumbs down' />
                            </Button>                   
                        </Button> 
                        </Button.Group>                      
                    </div><br/>
                    
                    <div >                     
                        <Button as='div' labelPosition='right'>                            
                            <Label basic pointing='right'>                                
                                    {comments[post.code] ? comments[post.code].length : 0 }
                            </Label>

                            <Link to={`/view/${post.code}`}>
                                <Button color="blue" icon>
                                        <Icon name='comments' /> Comments                             
                                </Button>
                            </Link>                            
                        </Button>                        
                    </div>
                    
                        
                </figcaption>

            </figure>
        )
    }
}

export default Photo;
