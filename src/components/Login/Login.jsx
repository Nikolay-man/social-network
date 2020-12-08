import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../redux/utils/validators/validators.js";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
import s from './Login.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Логин", "email", [required], Input)}
            {createField("Пароль", "password", [required], Input, {type: "password"})}

            { captchaUrl && <img src={captchaUrl} alt="" />}
            { captchaUrl &&  createField('Simbols from image', "captcha", [required], Input, {})}
            
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Вход</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div className={s.loginForm}>
        <h2>Вход в Социальную сеть</h2>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);