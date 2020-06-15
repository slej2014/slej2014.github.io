import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";




const Navbar = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
         </div>
         <div className={`${s.item} ${s.active}`}>
             <NavLink  to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
         </div>
         <div className={s.item}>
            <NavLink  to="/news" activeClassName={s.activeLink}>News</NavLink >
         </div>
         <div className={s.item}>
            <NavLink  to="/music" activeClassName={s.activeLink}>Music</NavLink >
         </div>
         <div className={s.item}>
            <NavLink  to="/settings" activeClassName={s.activeLink}>Settings</NavLink >
         </div>
          <div className={s.friends}>
              <div>Friends</div>
              <div className={s.frAva}>
                      <img src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg" alt="" />
                      <img src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg" alt="" />
                      <img src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg" alt="" />
              </div>
          </div>
      </nav>
   )
}
export default Navbar;