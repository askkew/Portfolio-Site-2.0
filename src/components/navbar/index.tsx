import { useState } from "react";
import { primary } from "../../utils";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavBtnTheme, StyledIconButton, StyledDrawer, MobileNavArea, ResumeNavLink, MobileResumeNavLink } from './navbarstyles';
import "./index.css";
import { FC } from "react";
import { CustomStyledButton } from "../button/buttonstyles";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@mui/material";

export interface NavBarTypes {
  theme: any,
  handleToggleTheme: any,
}

const Navbar: FC<NavBarTypes> = ({ handleToggleTheme }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

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
        <StyledIconButton onClick={toggleOpen}>
          <Bars />
        </StyledIconButton>
        <StyledDrawer anchor="top" open={open} onClose={toggleOpen}>
          <MobileNavArea>
            <NavLink to='/'>
              All
            </NavLink>
            <NavLink to='/about'>
              About
            </NavLink>
            <NavLink to='/work'>
              Work
            </NavLink>
            <NavLink to='/contact'>
              Contact
            </NavLink>
            <MobileResumeNavLink to={'/resume'}>resume</MobileResumeNavLink>
          </MobileNavArea>
        </StyledDrawer>
        <NavMenu className="checkbox-wrapper-54">
          <NavLink to='/'>
            All
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/work'>
            Work
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </NavMenu>
        <ResumeNavLink to={'/resume'}>resume</ResumeNavLink>
      </Nav>
    </>
  );
};

export default Navbar;