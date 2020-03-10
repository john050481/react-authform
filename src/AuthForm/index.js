import React from "react";
import PropTypes from "prop-types";

import SignIn from '.././SignIn';
import SignUp from '.././SignUp';
import SignOut from '.././SignOut';
import ForgotPass from '.././ForgotPass';

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
  handleSignUp: (e) => {},
  handleForgotPass: (e) => {},
  handleSignOut: (e) => {}
};

export default AuthForm;