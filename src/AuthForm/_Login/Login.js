import React from "react";
import './style.css';
import Button from "components/CustomButtons/Button.js";

/*
function handleClick(e) {
  $('.message a').click(function(){
     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  });
};
*/

export default function Login(props) {
  const [login, setLoginForm] = React.useState(true);

  function handleClick(e) {
    setLoginForm(!login);
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form" hidden={login}>
          <input type="text" placeholder="name"/>
          <input type="password" placeholder="password"/>
          <input type="password" placeholder="confirm password"/>
          <input type="text" placeholder="email address"/>
          <Button type="button" color="success">create</Button>
          <p className="message">Already registered? <Button size='sm' color="transparent" onClick={handleClick}>Sign In</Button></p>
        </form>
        <form className="login-form" hidden={!login}>
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <Button type="button" color="success">login</Button>
          <p className="message">Not registered? <Button size='sm' color="transparent" onClick={handleClick}>Create an account</Button></p>
        </form>
      </div>
    </div>
  )
}
