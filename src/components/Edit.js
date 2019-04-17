import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index';
import { Form, Field } from 'react-final-form';
import { Button } from 'semantic-ui-react';


class Edit extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(values){
    const activeUser = this.props.match.params.userId;
    const filtered = this.props.users.filter(
                      (users) => users.userId === activeUser );
    const data = filtered[0];

    const index = this.props.users.map( x=> x.userId).indexOf(activeUser);

    
    let oldData = {firstName: data.firstName, 
                              lastName: data.lastName, 
                              username: data.username, 
                              email: data.email}; 

    let newData = {...oldData, ...values};
    
    this.props.editUser(index, newData.firstName, newData.lastName, newData.username, newData.email);

  }


  render(){
    console.log(this.props);

    const activeUser = this.props.match.params.userId;
    const filtered = this.props.users.filter(
      (users) => users.userId === activeUser );
    const data = filtered[0];


    return(
      <div>
        <h1>Edit</h1>

        <Form 
                  onSubmit={ this.handleSubmit }
                  
                      render={({ submitError, handleSubmit, form, submitting, pristine, values }) => (
                          <form ref="userForm" id="profileForm" onSubmit={handleSubmit}>

                              <Field name="firstName">
                                  {({ input, meta }) => (
                                  <div>        
                                      <label>First Name:  </label>
                                      <input {...input} type="text" placeholder={data.firstName} />
                                  </div>
                                  )}
                              </Field>

                              <Field name="lastName">
                                  {({ input, meta }) => (
                                  <div>
                                      <label>Last Name: </label>
                                      <input {...input} type="text" placeholder={data.lastName} />
                                  </div>
                                  )}
                              </Field>

                              <Field name="username">
                                  {({ input, meta }) => (
                                  <div>
                                      <label>Username: </label>
                                      <input {...input} type="text" placeholder={data.username}/>
                                  </div>
                                  )}
                              </Field>

                              <Field name="email">
                                  {({ input, meta }) => (
                                  <div>
                                      <label>Email: </label>
                                      <input {...input} type="email" placeholder={data.email} />
                                  </div>
                                  )}
                              </Field>
                            

                              <div className="buttons">
                                <Button 
                                  size = "massive"
                                  basic color ="blue" 
                                  type="submit"
                                  disabled={submitting || pristine}
                                >
                                  Edit
                                </Button>
                                
                                <Button
                                  basic color ="green"
                                  size = "massive"
                                  type="button"
                                  onClick={form.reset}
                                  disabled={submitting || pristine}
                                >
                                  Reset
                                </Button>

                                
                              </div>

                          </form>
                  )}
              />
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



export default connect(mapStateToProps, mapDispachToProps)(Edit);