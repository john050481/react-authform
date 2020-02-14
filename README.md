# Authentications form: React + @material-ui
Компоненте формы аутентификации (логин, регистрация, вспомнить пароль, выход).
<br>Использовался: [material-ui](https://material-ui.com/ru/).
![demo](https://github.com/john050481/react-authform/blob/master/demo/All.jpg)

# Getting started
```bash
# via npm
git clone https://github.com/john050481/react-authform.git
cd react-authform
npm i
npm start
```
# Основные моменты
## Основной компонент ```AuthForm.js```:
Подключаем и прокидываем свои пропсы
```js
import AuthForm from './AuthForm/AuthForm';
```
```jsx
<AuthForm 
  isAuth={isAuth}
  handleSignIn={...}
  handleSignUp={...}
  handleForgotPass={...}
  handleSignOut={...}
/>
```
## Четыре формы: 
```
SignIn.js      /*Вход*/
SignOut.js     /*Выход*/
SignUp.js      /*Регистрация*/
ForgotPass.js  /*Забытый пароль*/
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
handleSignIn: (e) => {
  e.preventDefault();

  let form = e.currentTarget.form;
  if (form) {
    let data = new FormData(form);
    for(let pair of data.entries()) {
      console.log(pair[0]+ ': '+ pair[1]);
    }
  }
}
//Выведет в консоли то, что ввел пользователь:
email: email@corp.ru
password: anypass
remember: remember //если выставлена галочка 'запомнить' 
```
## Тесты:
```bash
npm test
```
## Бонус, компонент который проверяет аутентификацию:
```
RequireAuth.js
```
Это компонент высшего порядка (Higher-Order Component, HOC).
<br>Компонент принимает на вход компонент, который должен быть показан только для авторизованного пользователя (используется Redux).
<br>Возвращает: или ```null``` или можно сделать редирект (нужно установить Роуты: ```npm i react-router-dom```).
