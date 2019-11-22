import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

// let ClassNew = `${s.item} ${s.active}`

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
            </div>
            {/*<div className={`${s.item} ${s.active}`}><NavLink to="/dialogs">Messages</NavLink></div>*/}
            {/*<div className={s.item}><NavLink>News</NavLink></div>*/}
            {/*<div className={s.item}><NavLink>Music</NavLink></div>*/}
            {/*<div className={s.item}><NavLink>Settings</NavLink></div>*/}
        </nav>
    );
}

export default NavBar;

