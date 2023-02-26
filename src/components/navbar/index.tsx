import { useState } from "react";
import { primary } from "../../utils";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavBtnTheme } from './navbarstyles';
import "./index.css";
import { FC } from "react";

export interface NavBarTypes {
  theme: any,
  handleToggleTheme: any,
}

const Navbar: FC<NavBarTypes> = ({ theme, handleToggleTheme }) => {
  const [all, setAll] = useState([]);
  const [about, setAbout] = useState([]);
  const [contact, setContact] = useState([]);
  const [projects, setProjects] = useState([]);
  const [resume, setResume] = useState([]);

  return (
    <>
      <Nav>
        <NavBtnTheme>
        <div className="checkbox-wrapper-54">
          <label className="switch">
            <input type="checkbox" onChange={handleToggleTheme}/>
            <span className="slider"></span>
          </label>
        </div>
        </NavBtnTheme>
        <Bars />
        <NavMenu>
          <NavLink to='/'>
            All
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/projects'>
            Projects
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink style={{backgroundColor: primary}} to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;