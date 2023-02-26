import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { primary } from '../../utils';

export const Nav = styled('nav')({
  background: 'transparent',
  height: '80px',
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
  // margin: '0.5rem',
  height: '80%',
  cursor: 'pointer',
  '&.active': {
    color: 'gainsboro',
    fontWeight: 'bold',
    backgroundColor: 'rgb(44,44,46)',
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
  background: 'rgb(13,13,14)',
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
