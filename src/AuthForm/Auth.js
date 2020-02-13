import React from "react";
import PropTypes from "prop-types";

import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import SignOut from './SignOut.js';
import ForgotPass from './ForgotPass.js';

function Auth(props) {
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

Auth.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  handleSignIn: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  handleForgotPass: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired
};
Auth.defaultProps = {
  isAuth: false,
  handleSignIn: () => {},
  handleSignUp: () => {},
  handleForgotPass: () => {},
  handleSignOut: () => {}
};

export default Auth;
