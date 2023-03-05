import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { ContentCard } from "../../utils";

export const ProjectContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'top',
  justifyContent: 'top',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
})

export const ProjectCard = styled(ContentCard)({
  // width: '100%',
  height: '300px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'top',
  alignItems: 'center',
  padding: '2rem',
});

export const ProjectDetailsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'top',
});

export const ProjectLinkButtonGroup = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0.5rem',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
});

export const ProjectTitle = styled(Typography)({
  fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  fontSize: '2rem',
  fontWeight: 500,
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
});

export const ProjectDescription = styled(Typography)({
  fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  fontSize: '1rem',
  fontWeight: 500,
  '@media (max-width: 768px)': {
    fontSize: '0.8rem',
  },
});

export const StyledMEDImg = styled('img')({
  height: '100%',
  objectFit: 'cover',
  marginRight: '10px',
  '@media (max-width: 768px)': {
    height: '70%',
  },
});

export const StyledTDSCImg = styled('img')({
  height: '90%',
  objectFit: 'cover',
  marginRight: '10px',
  '@media (max-width: 768px)': {
    height: '60%',
  },
});

export const StyledWeatherImg = styled('img')({
  height: '100%',
  objectFit: 'cover',
  marginRight: '10px',
  '@media (max-width: 768px)': {
    height: '70%',
  },
});