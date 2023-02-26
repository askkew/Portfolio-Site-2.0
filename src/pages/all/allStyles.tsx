import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { FaJava } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { DiPhp } from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import styled from "@emotion/styled";
import { ContentCard } from "../../utils";
import { IconButton, Typography } from '@mui/material'

export const AllContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'top',
  justifyContent: 'top',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
})

export const TopContainer = styled(AllContainer)({
  flexDirection: 'row',
})

export const TopLeftContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'top',
  justifyContent: 'top',
});

export const WelcomeCard = styled(ContentCard)({
  width: '300px',
  height: '700px',
});

export const IntroCard = styled(ContentCard)({
  width: '700px',
  height: '330px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'top',
  padding: '1rem',
});

export const AllCard = styled(ContentCard)({
  width: '300px',
  height: '300px',
});

export const GithubCard = styled(ContentCard)({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '300px',
  height: '300px',
  backgroundColor: 'rgb(35,134,54)',
});

export const LinkedInCard = styled(ContentCard)({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '300px',
  height: '300px',
  backgroundColor: '#0072b1',
});

export const EmailCard = styled(ContentCard)({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '300px',
  height: '300px',
  backgroundColor: 'rgb(189,46,46)',
});

export const IntroTitle = styled(Typography)({
  fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  fontSize: '2.1em',
  fontWeight: '400',
});

export const IntroDescription = styled(Typography)({
  fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  fontSize: '1.4em',
  fontWeight: '400',
});

//==================================================================================================

const IconStyle = {
  fontSize: 32,
  marginRight: 10,
}

export const ToolIcons = [
  <SiJavascript style={IconStyle} />,
  <SiTypescript style={IconStyle} />,
  <DiMysql style={IconStyle} />,
  <FaHtml5 style={IconStyle} />,
  <FaCss3Alt style={IconStyle} />,
  <DiMongodb style={IconStyle} />,
  <FaReact style={IconStyle} />,
  <SiRedux style={IconStyle} />,
  <FaNodeJs style={IconStyle} />,
  <DiPhp style={IconStyle} />,
  <FaBootstrap style={IconStyle} />,
  <FaJava style={IconStyle} />,
]

export const ToolIconLabel = [
  <span className="glowing-txt">JavaScript</span>,
  <span className="glowing-txt">TypeScript</span>,
  <span className="glowing-txt">MySQL</span>,
  <span className="glowing-txt">HTML5</span>,
  <span className="glowing-txt">CSS3</span>,
  <span className="glowing-txt">MongoDB</span>,
  <span className="glowing-txt">React</span>,
  <span className="glowing-txt">Redux</span>,
  <span className="glowing-txt">NodeJS</span>,
  <span className="glowing-txt">PHP</span>,
  <span className="glowing-txt">Bootstrap</span>,
  <span className="glowing-txt">Java</span>,
]

export const StyledScrollButton = styled(IconButton)({
  'font-family': '-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  'font-size': '1em',
  'font-weight': '400',
  'letter-spacing': '0.4em',
});