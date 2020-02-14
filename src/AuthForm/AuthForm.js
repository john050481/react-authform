import React from "react";
import PropTypes from "prop-types";

import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import SignOut from './SignOut.js';
import ForgotPass from './ForgotPass.js';

function AuthForm(props) {
  const [switchForm, setSwitchForm] = React.useState('SignIn');

  function handleSwitchForm(e, formName) {
    setSwitchForm(formName);
  };

  if (props.isAuth) {
    return <SignOut        handleSignOut={props.handleSignOut}/>;
  } else {
    switch (switchForm) {
      case 'SignIn':
        return <SignIn     handleSwitchForm={handleSwitchForm} handleSignIn={props.handleSignIn} />
      case 'SignUp':
        return <SignUp     handleSwitchForm={handleSwitchForm} handleSignUp={props.handleSignUp}/>
      case 'ForgotPass':
        return <ForgotPass handleSwitchForm={handleSwitchForm} handleForgotPass={props.handleForgotPass}/>
      default:
        return null
    }
  }
}

AuthForm.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  handleForgotPass: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired
};
AuthForm.defaultProps = {
  isAuth: false,
  handleSignIn: (e) => {
    e.preventDefault();

    let form = e.currentTarget.form;
    if (form) {
      let data = new FormData(form);
      for(let pair of data.entries()) {
        console.log(pair[0]+ ': '+ pair[1]);
      }
    }
  },
  handleSignUp: (e) => {
    /* ************ for example
    e.preventDefault();

    let form = e.currentTarget.form;
    if (form) {
      let data = new FormData(form);
      for(let pair of data.entries()) {
        console.log(pair[0]+ ': '+ pair[1]);
      }
    }
    */
  },
  handleForgotPass: (e) => {},
  handleSignOut: (e) => {}
};

export default AuthForm;
