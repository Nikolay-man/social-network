import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activeLink}><b>Профиль</b></NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to="/users" activeClassName={s.activeLink}><b>Пользователи</b></NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to="/dialogs" activeClassName={s.activeLink}><b>Общение</b></NavLink>
    </div>
  </nav>
}

export default Navbar;