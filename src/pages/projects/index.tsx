import { CustomStyledButton } from "../../components/button/buttonstyles"
import { ProjectCard, ProjectContainer, ProjectDescription, ProjectDetailsContainer, ProjectLinkButtonGroup, ProjectTitle } from "./projectstyles"
import { BsArrowUpRight } from "react-icons/bs"

const Projects = () => {
  return (
    <ProjectContainer>
      <ProjectCard>
        <img src="/medplusprimary.png" style={{height: '100%', marginRight: '10px'}}/>
        <ProjectDetailsContainer>
          <ProjectTitle>MedPlus</ProjectTitle>
          <ProjectDescription>MedPLUS specializes in providing innovative and comprehensive medical professional liability insurance products through financially secure, A.M. Best Rated insurance carriers.</ProjectDescription>
          <ProjectLinkButtonGroup>
            <CustomStyledButton style={{height: '50px', marginRight: '10px'}}>View site <BsArrowUpRight /></CustomStyledButton>
            <CustomStyledButton style={{height: '50px'}}>View github repo <BsArrowUpRight /></CustomStyledButton>
          </ProjectLinkButtonGroup>
        </ProjectDetailsContainer>
      </ProjectCard>
      <ProjectCard>
        <img src="/TDSCprimary.png" style={{height: '90%', marginRight: '10px'}}/>
        <ProjectDetailsContainer>
          <ProjectTitle>TDSC</ProjectTitle>
          <ProjectDescription>TDSC is a shooting club operated out of Houston Texas that brings together gun enthusiasts for self defense classes and range days.</ProjectDescription>
          <ProjectLinkButtonGroup>
            <CustomStyledButton style={{height: '50px', marginRight: '10px'}}>View site <BsArrowUpRight /></CustomStyledButton>
            <CustomStyledButton style={{height: '50px'}}>View github repo <BsArrowUpRight /></CustomStyledButton>
          </ProjectLinkButtonGroup>
        </ProjectDetailsContainer>
      </ProjectCard>
      <ProjectCard>
        <img src="/TDSCiphone14pro.png" style={{height: '100%', marginRight: '10px'}}/>
        <ProjectDetailsContainer>
          <ProjectTitle>Weather app</ProjectTitle>
          <ProjectDescription>This is a basic MERN stack application that allows users to get the current weather details as well as the following 6 day forecast for any city.</ProjectDescription>
          <ProjectLinkButtonGroup>
            <CustomStyledButton style={{height: '50px', marginRight: '10px'}}>View site <BsArrowUpRight /></CustomStyledButton>
            <CustomStyledButton style={{height: '50px'}}>View github repo <BsArrowUpRight /></CustomStyledButton>
          </ProjectLinkButtonGroup>
        </ProjectDetailsContainer>
      </ProjectCard>
    </ProjectContainer>
  )
}

export default Projects