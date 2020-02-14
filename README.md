# Authentications form: React + @material-ui
Компоненте формы аутентификации (логин, регистрация, вспомнить пароль, выход).
Использовал: [link to material-ui](https://material-ui.com/ru/).

# Getting started
```bash
# via npm
npm i
npm start
```
# Основные моменты
## Основной компонент:
```
AuthForm.js
```
## Четыре формы: 
```
SignIn.js
SignOut.js
SignUp.js
ForgotPass.js
```
## Пропсы AuthForm:
```js
AuthForm.propTypes = {
  isAuth: PropTypes.bool.isRequired,            /*признак авторизации*/
  handleSignIn: PropTypes.func.isRequired,      /*колбек при входе*/
  handleSignUp: PropTypes.func.isRequired,      /*колбек при регистрации*/
  handleForgotPass: PropTypes.func.isRequired,  /*колбек при забытии пароля*/
  handleSignOut: PropTypes.func.isRequired      /*колбек при выходе*/
};
```
## Бонус, компонент который проверяет аутентификацию:
```
RequireAuth.js
```
Это компонент высшего порядка (Higher-Order Component, HOC).
<br>Компонент принимает на вход компонент, который должен быть показан только для авторизованного пользователя (используется Redux).
<br>Возвращает: или ```null``` или можно сделать редирект.
