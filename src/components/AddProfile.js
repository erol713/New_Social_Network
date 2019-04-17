import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/index';
import { Form, Field } from 'react-final-form';
import { Button } from 'semantic-ui-react';


class Edit extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(values){
    const firstName  = values.firstName;
    const lastName = values.lastName;
    const username = values.username;
    const email = values.email;
    this.props.addUser(firstName, lastName, username, email);
  


  }


    render(){
       console.log('edit.props', this.props);
        return(
            <div>     
              <h1>Add profile</h1>

                <Form 
                  onSubmit={ this.handleSubmit }
                  validate={values => {

                      const errors = {};
                      if (!values.firstName) {
                        errors.firstName = "Required";
                      }
                      if (!values.lastName) {
                        errors.lastName = "Required";
                      }
                      if (!values.username) {
                          errors.username = "Required";
                        }
                      if (!values.email) {
                      errors.email = "Required";
                      }

                      return errors;
                    }}

                      render={({ submitError, handleSubmit, form, submitting, pristine, values }) => (
                          <form ref="userForm" id="profileForm" onSubmit={handleSubmit}>

                              <Field name="firstName">
                                  {({ input, meta }) => (
                                  <div>
                                      <label>First Name</label>
                                      <input {...input} type="text" placeholder="First name" />
                                      {(meta.error || meta.submitError) &&
                                      meta.touched && <span>{meta.error || meta.submitError}</span>}
                                  </div>
                                  )}
                              </Field>

                              <Field name="lastName">
                                  {({ input, meta }) => (
                                  <div>
                                      <label>Last Name</label>
                                      <input {...input} type="text" placeholder="Last name" />
                                      {(meta.error || meta.submitError) &&
                                      meta.touched && <span>{meta.error || meta.submitError}</span>}
                                  </div>
                                  )}
                              </Field>

                              <Field name="username">
                                  {({ input, meta }) => (
                                  <div>
                                      <label>Username</label>
                                      <input {...input} type="text" placeholder="Username" />
                                      {(meta.error || meta.submitError) &&
                                      meta.touched && <span>{meta.error || meta.submitError}</span>}
                                  </div>
                                  )}
                              </Field>

                              <Field name="email">
                                  {({ input, meta }) => (
                                  <div>
                                      <label>Email</label>
                                      <input {...input} type="email" placeholder="Email" />
                                      {(meta.error || meta.submitError) &&
                                      meta.touched && <span>{meta.error || meta.submitError}</span>}
                                  </div>
                                  )}
                              </Field>
                              
                              {submitError && <div className="error">{submitError}</div>}
                            

                              <div className="buttons">
                                <Button 
                                  size = "massive"
                                  basic color ="blue" 
                                  type="submit"
                                  disabled={submitting || pristine}
                                >
                                  Submit
                                </Button>
                                
                                <Button
                                  basic color ="red"
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
      users:state.users
  }
}

function mapDispachToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);

}



export default connect(mapStateToProps, mapDispachToProps)(Edit);