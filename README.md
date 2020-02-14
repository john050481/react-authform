# Authentications form: React + @material-ui
Компоненте формы аутентификации (логин, регистрация, вспомнить пароль, выход).
<br>Использовался: [material-ui](https://material-ui.com/ru/).

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
Предаются из Вашего кода:
```js
AuthForm.propTypes = {
  isAuth: PropTypes.bool.isRequired,            /*признак авторизации*/
  handleSignIn: PropTypes.func.isRequired,      /*коллбэк при входе*/
  handleSignUp: PropTypes.func.isRequired,      /*коллбэк при регистрации*/
  handleForgotPass: PropTypes.func.isRequired,  /*коллбэк при забытии пароля*/
  handleSignOut: PropTypes.func.isRequired      /*коллбэк при выходе*/
};
```
В качестве примера коллбэк, который выдает пары (ключ, значения) инпутов формы:
```js
  handleSignIn: (e) => {
    e.preventDefault();

    let form = e.currentTarget.form;
    if (form) {
      let data = new FormData(form);
      for(let pair of data.entries()) {
        console.log(pair[0]+ ', '+ pair[1]);
      }
    }
  }
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
