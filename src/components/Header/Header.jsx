import Typography from '@material-ui/core/Typography';
import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://mir-s3-cdn-cf.behance.net/projects/max_808/69910487563309.Y3JvcCw4OTksNzAzLDAsMTA2.png' 
            alt="description"
        />
        <div className={s.title}><Typography variant="h4">Cоциальная сеть</Typography></div>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div className={s.login}>{props.login} <button onClick={props.logout}>Выйти</button></div>
                : <button to={'/login'}>Регистрация</button>}
        </div>
    </header>
}

export default Header;