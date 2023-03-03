import { CustomStyledButton } from "../../components/button/buttonstyles"
import { ProjectCard, ProjectContainer, ProjectDescription, ProjectDetailsContainer, ProjectLinkButtonGroup, ProjectTitle, StyledMEDImg, StyledTDSCImg, StyledWeatherImg } from "./projectstyles"
import { BsArrowUpRight } from "react-icons/bs"
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Projects = () => {
  return (
    <ProjectContainer>
      <Fade left>
        <ProjectCard>
          <StyledMEDImg src="/medplusprimary.png"/>
          <ProjectDetailsContainer>
            <ProjectTitle>MedPlus</ProjectTitle>
            <ProjectDescription>MedPLUS specializes in providing innovative and comprehensive medical professional liability insurance products through financially secure, A.M. Best Rated insurance carriers.</ProjectDescription>
            <ProjectLinkButtonGroup>
              {/* <CustomStyledButton style={{height: '50px', marginRight: '10px'}}>View site <BsArrowUpRight /></CustomStyledButton> */}
              <CustomStyledButton style={{height: '50px'}} href="https://github.com/snyperifle/medPlus">View github repo <BsArrowUpRight /></CustomStyledButton>
            </ProjectLinkButtonGroup>
          </ProjectDetailsContainer>
        </ProjectCard>
      </Fade>
      <Fade right>
        <ProjectCard>
          <StyledTDSCImg src="/TDSCprimary.png"/>
          <ProjectDetailsContainer>
            <ProjectTitle>TDSC</ProjectTitle>
            <ProjectDescription>TDSC is a shooting club operated out of Houston Texas that brings together gun enthusiasts for self defense classes and range days.</ProjectDescription>
            <ProjectLinkButtonGroup>
              {/* <CustomStyledButton style={{height: '50px', marginRight: '10px'}}>View site <BsArrowUpRight /></CustomStyledButton> */}
              <CustomStyledButton style={{height: '50px'}} href="https://github.com/snyperifle/TDSC">View github repo <BsArrowUpRight /></CustomStyledButton>
            </ProjectLinkButtonGroup>
          </ProjectDetailsContainer>
        </ProjectCard>
      </Fade>
      <Fade left>
        <ProjectCard>
          <StyledWeatherImg src="/TDSCiphone14pro.png"/>
          <ProjectDetailsContainer>
            <ProjectTitle>Weather app</ProjectTitle>
            <ProjectDescription>This is a basic MERN stack application that allows users to get the current weather details as well as the following 6 day forecast for any city.</ProjectDescription>
            <ProjectLinkButtonGroup>
              {/* <CustomStyledButton style={{height: '50px', marginRight: '10px'}}>View site <BsArrowUpRight /></CustomStyledButton> */}
              <CustomStyledButton style={{height: '50px'}} href="https://github.com/askkew/WeatherApp">View github repo <BsArrowUpRight /></CustomStyledButton>
            </ProjectLinkButtonGroup>
          </ProjectDetailsContainer>
        </ProjectCard>
      </Fade>
      <Fade right>
        <ProjectCard>
          <StyledWeatherImg src="/techliteprimary.png"/>
          <ProjectDetailsContainer>
            <ProjectTitle>Techlite</ProjectTitle>
            <ProjectDescription>Techlite is an E-commerce website designed by a team of students as a term project. We utilized HTML, CSS, JS, PHP, Bootstrap, and a SQL database to create it. It included an entire admin back end for managing orders, users, contact tickets, and products.</ProjectDescription>
            <ProjectLinkButtonGroup>
              {/* <CustomStyledButton style={{height: '50px', marginRight: '10px'}}>View site <BsArrowUpRight /></CustomStyledButton> */}
              <CustomStyledButton style={{height: '50px'}} href="https://github.com/Scrub-Sauce/Scared2Compile">View github repo <BsArrowUpRight /></CustomStyledButton>
            </ProjectLinkButtonGroup>
          </ProjectDetailsContainer>
        </ProjectCard>
      </Fade>
    </ProjectContainer>
  )
}

export default Projects