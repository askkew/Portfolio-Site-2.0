import { useState } from "react";
import { primary } from "../../utils";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavBtnTheme } from './navbarstyles';
import "./index.css";
import { FC } from "react";
import { CustomStyledButton } from "../button/buttonstyles";

export interface NavBarTypes {
  theme: any,
  handleToggleTheme: any,
}

const Navbar: FC<NavBarTypes> = ({ handleToggleTheme }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const showMobile = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const showDesktop = () => {
    if (window.innerWidth > 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  window.addEventListener("resize", showDesktop);
  window.addEventListener("resize", showMobile);

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
        <NavMenu className="checkbox-wrapper-54">
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
        {
          isMobile ? null : <CustomStyledButton>resume</CustomStyledButton>
        }
      </Nav>
    </>
  );
};

export default Navbar;