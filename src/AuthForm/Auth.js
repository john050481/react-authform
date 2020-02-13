import React from "react";
import PropTypes from "prop-types";

import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import SignOut from './SignOut.js';
import ForgotPass from './ForgotPass.js';

export const SIGNIN     = 'SIGNIN';
export const SIGNUP     = 'SIGNUP';
export const FORGOTPASS = 'FORGOTPASS';
//const SIGNOUT    = 'SIGNOUT';

function Auth(props) {
  const [switchForm, setSwitchForm] = React.useState(SIGNIN);

  function handleSwitchForm(e, formName) {
    setSwitchForm(formName);
  };

  if (props.isAuth) {
    return <SignOut handleSignOut={props.handleSignOut}/>;
  } else {
    switch (switchForm) {
      case SIGNIN:
        return <SignIn     handleSwitchForm={handleSwitchForm} handleSignIn={props.handleSignIn} />
      case SIGNUP:
        return <SignUp     handleSwitchForm={handleSwitchForm} handleSignUp={props.handleSignUp}/>
      case FORGOTPASS:
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
  isAuth: false
};

export default Auth;
