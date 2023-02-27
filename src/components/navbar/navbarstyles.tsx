import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { primary } from '../../utils';

export const Nav = styled('nav')({
  background: 'transparent',
  height: '120px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0.5rem calc((100vw - 1000px) / 2)',
  zIndex: 10,
});

export const NavLink = styled(Link)({
  color: 'gainsboro',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  borderRadius: '50px',
  padding: '0 1rem 0 1rem',
  margin: '0 0.35rem 0 0.35rem',
  // margin: '0.5rem',
  height: '80%',
  cursor: 'pointer',
  fontWeight: 'bold',
  backgroundImage: 'transparent',
  backgroundSize: 'calc(100% + 20px) calc(100% + 20px)',
  transition: '0.4s',
  '&.active': {
    color: 'gainsboro',
    fontWeight: 'bold',
    backgroundImage: 'linear-gradient(1deg, #8983f7, #a3dafb 99%)',
    backgroundSize: 'calc(100% + 20px) calc(100% + 20px)',
    transition: '0.4s',
    borderRadius: '50px',
  },
});

export const Bars = styled(FaBars)({
  display: 'none',
  color: 'gainsboro',
  '@media screen and (max-width: 768px)': {
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(-100%, 75%)',
    fontSize: '1.8rem',
    cursor: 'pointer',
  },
})

export const NavMenu = styled('div')({
  display: 'flex',
  alignItems: 'center',
  background: '#303136',
  borderRadius: '50px',
  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  height: '35px',
  '@media screen and (max-width: 768px)': {
    display: 'none',
  },
});

export const NavBtn = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  marginRight: '24px',
  '@media screen and (max-width: 768px)': {
    display: 'none',
  },
});

export const NavBtnTheme = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '24px',
});

export const NavBtnLink = styled(Link)({
  borderRadius: '4px',
  background: 'gainsboro',
  padding: '10px 22px',
  color: '#fff',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  textDecoration: 'none',
  marginLeft: '24px',
  '&:hover': {
    transition: 'all 0.2s ease-in-out',
    background: '#fff',
    color: '#010606',
  },
});

export { Link };

// <!-- HTML !-->
// <button class="button-21" role="button">Button 21</button>

// /* CSS */
// .button-21 {
//   align-items: center;
//   appearance: none;
//   background-color: #3EB2FD;
//   background-image: linear-gradient(1deg, #4F58FD, #149BF3 99%);
//   background-size: calc(100% + 20px) calc(100% + 20px);
//   border-radius: 100px;
//   border-width: 0;
//   box-shadow: none;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   cursor: pointer;
//   display: inline-flex;
//   font-family: CircularStd,sans-serif;
//   font-size: 1rem;
//   height: auto;
//   justify-content: center;
//   line-height: 1.5;
//   padding: 6px 20px;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   transition: background-color .2s,background-position .2s;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: top;
//   white-space: nowrap;
// }

// .button-21:active,
// .button-21:focus {
//   outline: none;
// }

// .button-21:hover {
//   background-position: -20px -20px;
// }

// .button-21:focus:not(:active) {
//   box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 .125em;
// }