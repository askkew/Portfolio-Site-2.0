import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import { primary } from '../../utils';
import { Drawer, IconButton } from '@mui/material';

export const Nav = styled('nav')({
  background: 'transparent',
  height: '120px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0.5rem calc((100vw - 1000px) / 2)',
  zIndex: 100,
});

export const NavLink = styled(Link)(({theme}) => ({
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  borderRadius: '50px',
  padding: '0 1rem 0 1rem',
  margin: '0 0.35rem 0 0.35rem',
  // margin: '0.5rem',
  height: '80%',
  cursor: 'pointer',
  fontWeight: '650',
  fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  backgroundImage: 'transparent',
  backgroundSize: 'calc(100% + 20px) calc(100% + 20px)',
  transition: '0.4s',
  '&.active': {
    color: 'gainsboro',
    fontWeight: 'bold',
    backgroundImage: theme.palette.mode === 'light' ? 'linear-gradient(to bottom right, #EF4765, #FF9A5A)' : 'linear-gradient(to bottom right, #8983f7, #a3dafb)',
    backgroundSize: 'calc(100% + 20px) calc(100% + 20px)',
    transition: '0.4s',
    borderRadius: '50px',
  },
}));

export const Bars = styled(FaBars)(({theme}) => ({
  display: 'none',
  color: theme.palette.mode === 'light' ? 'black' : 'gainsboro',
  height: '45px',
  '@media screen and (max-width: 768px)': {
    display: 'block',
    position: 'absolute',
    top: -46,
    right: 0,
    transform: 'translate(-100%, 75%)',
    fontSize: '1.8rem',
    cursor: 'pointer',
  },
}));

export const NavMenu = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.mode === 'dark' ? '#303136' : 'white',
  borderRadius: '50px',
  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  height: '35px',
  '@media screen and (max-width: 768px)': {
    display: 'none',
  },
}));

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
  '@media (max-width: 768px)': {
    marginLeft: '24px',
  },
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

export const MobileNavArea = styled('nav')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "4rem",
  padding: "2rem",
})

export const StyledIconButton = styled(IconButton)({
  display: "none",
  '@media (max-width: 1022px)': {
    display: "flex",
  },
})

export const StyledDrawer = styled(Drawer)({
  '& .MuiBackdrop-root': {
    backgroundColor: 'transparent !important',
  },
  '& .MuiPaper-root': {
    backgroundColor: 'transparent !important',
    backdropFilter: 'blur(20px)',
  },
})

export const ResumeNavLink = styled(Link)(({theme}) => ({
  background: theme.palette.mode === 'light' ? 'linear-gradient(to bottom right, #EF4765, #FF9A5A)' : 'linear-gradient(to bottom right, #8983f7, #a3dafb)',
  border: 0,
  borderRadius: 12,
  color: 'white',
  cursor: 'pointer',
  display: 'inline-block',
  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 2.5,
  outline: 'transparent',
  padding: '0 1rem',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'box-shadow .2s ease-in-out',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  whiteSpace: 'nowrap',
  '&:focus': {
    boxShadow: `0 0 .25rem rgba(0, 0, 0, 0.5), 
      -.125rem -.125rem 1rem ${
        theme.palette.mode === 'dark' ? 'rgba(137, 131, 247, 0.5)' : 'rgba(239, 71, 101, 0.5)'
      }, 
      .125rem .125rem 1rem ${
        theme.palette.mode === 'dark' ? 'rgba(163, 218, 251, 0.5)' : 'rgba(255, 154, 90, 0.5)'
      }`,
  },
  '&:hover': {
    boxShadow: `0 0 .25rem rgba(0, 0, 0, 0.5), 
      -.125rem -.125rem 1rem ${
        theme.palette.mode === 'dark' ? 'rgba(137, 131, 247, 0.5)' : 'rgba(239, 71, 101, 0.5)'
      }, 
      .125rem .125rem 1rem ${
        theme.palette.mode === 'dark' ? 'rgba(163, 218, 251, 0.5)' : 'rgba(255, 154, 90, 0.5)'
      }`,
  },
  '@media (max-width: 1022px)': {
    display: 'none',
  },
}));

export const MobileResumeNavLink = styled(Link)(({theme}) => ({
  background: theme.palette.mode === 'light' ? 'linear-gradient(to bottom right, #EF4765, #FF9A5A)' : 'linear-gradient(to bottom right, #8983f7, #a3dafb)',
  border: 0,
  borderRadius: 12,
  color: 'white',
  cursor: 'pointer',
  display: 'inline-block',
  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
  fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 2.5,
  outline: 'transparent',
  padding: '0 1rem',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'box-shadow .2s ease-in-out',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  whiteSpace: 'nowrap',
  '&:focus': {
    boxShadow: `0 0 .25rem rgba(0, 0, 0, 0.5), 
      -.125rem -.125rem 1rem ${
        theme.palette.mode === 'dark' ? 'rgba(137, 131, 247, 0.5)' : 'rgba(239, 71, 101, 0.5)'
      }, 
      .125rem .125rem 1rem ${
        theme.palette.mode === 'dark' ? 'rgba(163, 218, 251, 0.5)' : 'rgba(255, 154, 90, 0.5)'
      }`,
  },
  '&:hover': {
    boxShadow: `0 0 .25rem rgba(0, 0, 0, 0.5), 
      -.125rem -.125rem 1rem ${
        theme.palette.mode === 'dark' ? 'rgba(137, 131, 247, 0.5)' : 'rgba(239, 71, 101, 0.5)'
      }, 
      .125rem .125rem 1rem ${
        theme.palette.mode === 'dark' ? 'rgba(163, 218, 251, 0.5)' : 'rgba(255, 154, 90, 0.5)'
      }`,
  },
  '@media (min-width: 1022px)': {
    display: 'none',
  },
}));