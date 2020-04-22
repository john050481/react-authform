# Authentications form: React + @material-ui
Компоненте формы аутентификации (логин, регистрация, вспомнить пароль, выход).
<br>Использовался: [material-ui](https://material-ui.com/ru/).
<br>[Demo codesandbox.io](https://codesandbox.io/s/amazing-pike-dipok)
<br>![Demo picks](https://raw.githubusercontent.com/john050481/react-authform/master/demo_img/All.jpg)

# Getting started
```bash
# via GIT
git clone https://github.com/john050481/react-authform.git
cd react-authform
npm i
npm start
```
```bash
# via NPM (у себя в проекте)
npm i @john0504/react-authform
...
import {AuthForm} from "@john0504/react-authform";
```
# Основные моменты
## Основной компонент ```AuthForm```:
В Ваши колбеки (handleSignIn, handleSignUp, ...) передается объект события и данные формы: handleSignIn(event, formData)...
```jsx
<AuthForm 
  isAuth={isAuth}
  handleSignIn={ (e, formData) => {
    e.preventDefault(); 
    console.log('form data = ', formData)
  }}
  handleSignUp={...}
  handleForgotPass={...}
  handleSignOut={...}
/>
```
## Четыре формы: 
```
SignIn      /*Вход*/
SignOut     /*Выход*/
SignUp      /*Регистрация*/
ForgotPass  /*Забытый пароль*/
```
## Пропсы AuthForm:
Передаются из Вашего кода:
```js
AuthForm.propTypes = {
  isAuth: PropTypes.bool.isRequired,            /*признак авторизации*/
  handleSignIn: PropTypes.func.isRequired,      /*коллбэк при входе*/
  handleSignUp: PropTypes.func.isRequired,      /*коллбэк при регистрации*/
  handleForgotPass: PropTypes.func.isRequired,  /*коллбэк при забытом пароле*/
  handleSignOut: PropTypes.func.isRequired      /*коллбэк при выходе*/
};
```
В качестве примера коллбэк ```handleSignIn```, который выдает пары (ключ: значение) инпутов формы:
```js
handleSignIn: (e, formData) => {
  e.preventDefault();
  console.log(formData);
}
//Выведет в консоли то, что ввел пользователь:
email: email@corp.ru
password: anypass
remember: remember //если выставлена галочка 'запомнить' 
```
## Бонус, компонент который проверяет аутентификацию:
```
RequireAuth
```
Это компонент высшего порядка (Higher-Order Component, HOC).
<br>Компонент принимает на вход компонент, который должен быть показан только для авторизованного пользователя (используется Redux).
<br>Возвращает: или ```null``` или можно сделать редирект (нужно установить Роуты: ```npm i react-router-dom```).
