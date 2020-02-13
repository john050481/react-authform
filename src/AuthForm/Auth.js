import React from "react";
import PropTypes from "prop-types";
//---import { connect } from 'react-redux';

import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import SignOut from './SignOut.js';
import ForgotPass from './ForgotPass.js';

//---import {setUser, setUserInit} from 'store/user/actions.js';

export const SIGNIN     = 'SIGNIN';
export const SIGNUP     = 'SIGNUP';
export const FORGOTPASS = 'FORGOTPASS';
//const SIGNOUT    = 'SIGNOUT';

function Auth(props) {
  const [switchForm, setSwitchForm] = React.useState(SIGNIN);

  function handleSwitchForm(e, formName) {
    setSwitchForm(formName);
  };

  function handleSignIn(e) {
    props.setUser('user', '123456');
    //window.location = '/admin/dashboard'
  };

  function handleSignUp(e) { };

  function handleSignOut(e) {
    props.setUserInit();
  };

  function handleForgotPass(e) { };

  if (props.isAuth) {
    return <SignOut handleSignOut={handleSignOut}/>;
  } else {
    switch (switchForm) {
      case SIGNIN:
        return <SignIn     handleSwitchForm={handleSwitchForm} handleSignIn={handleSignIn} />
      case SIGNUP:
        return <SignUp     handleSwitchForm={handleSwitchForm} handleSignUp={handleSignUp}/>
      case FORGOTPASS:
        return <ForgotPass handleSwitchForm={handleSwitchForm} handleForgotPass={handleForgotPass}/>
      default:
        return null
    }
  }
}

//---
/*
const mapStateToProps = (state) => (
  {
    isAuth: Boolean(state.user.isAuth)
  }
);


const mapDispatchToProps = (dispatch) => (
  {
        setUser : (username, userId) => dispatch(setUser(username, userId)),
        setUserInit: () => dispatch(setUserInit()),
  }
);
*/

Auth.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  setUser: PropTypes.func.isRequired,
  setUserInit: PropTypes.func.isRequired,
/*---
handleSignIn
handleSignUp
handleForgotPass
handleSignOut
*/
};
Auth.defaultProps = {
  isAuth: false,
  setUser: () => {},
  setUserInit: () => {},
/*---
handleSignIn
handleSignUp
handleForgotPass
handleSignOut
*/
};
//---export default connect(mapStateToProps, mapDispatchToProps)(Auth);
export default Auth;
