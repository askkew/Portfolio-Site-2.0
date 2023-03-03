import { IconButton, Link } from '@mui/material';
import { AllCard, TopContainer, IntroCard, WelcomeCard, TopLeftContainer, ToolIcons, StyledScrollButton, ToolIconLabel, GithubCard, LinkedInCard, EmailCard, IntroTitle, IntroDescription, IntroTitleName, CardTitle } from './aboutstyles';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { CustomStyledButton } from '../../components/button/buttonstyles';
import Projects from '../projects';
import Contact from '../contact';
import { AboutContainer } from './aboutstyles';
// @ts-ignore
// import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <AboutContainer>
      <TopContainer>
          <TopLeftContainer>
            {/* <Fade left> */}
              <IntroCard>
                <div>
                  <IntroTitle>Hello my name is,</IntroTitle>
                  <IntroTitleName>Lucas Overbey</IntroTitleName>
                  <IntroDescription variant='h6'>I have been coding for almost <strong>6 years</strong> but recently focused on web development near the end of my education at UTSA, where I graduated with a <strong>Bachelor of Science in Computer Science</strong></IntroDescription>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <img src="mecomputer.png" style={{height: '60%'}}/>
                  <CustomStyledButton style={{margin: '5px 0 5px 0'}}>contact</CustomStyledButton>
                  <CustomStyledButton style={{margin: '5px 0 5px 0'}}>resume</CustomStyledButton>
                </div>
              </IntroCard>
            {/* </Fade>
            <Fade left> */}
              <IntroCard>
                <h1 style={{color: 'white'}}>MAP</h1>
                {/* <img src="medplusprimary.png" style={{height: '50%'}}/>
                <img src="TDSCprimary.png" style={{height: '50%'}}/> */}
              </IntroCard>
            {/* </Fade> */}
          </TopLeftContainer>
          {/* <Fade right> */}
            <WelcomeCard>
              <CardTitle>Toolkit</CardTitle>
                {
                  ToolIcons.map((icon, index) => {
                    return (
                      <StyledScrollButton disableRipple key={index}>
                        {icon}
                        {
                          ToolIconLabel[index] && <span>{ToolIconLabel[index]}</span>
                        }
                      </StyledScrollButton>
                    )
                  })
                }
            </WelcomeCard>
          {/* </Fade> */}
        </TopContainer>
        <TopContainer>
          {/* <GithubCard>
            <IconButton>
              <Link href="https://github.com/askkew" target="_blank" >
                <BsGithub style={{color: 'white', fontSize: '90'}}/>
              </Link>
            </IconButton>
          </GithubCard>
          <LinkedInCard>
            <IconButton>
              <Link href="https://www.linkedin.com/in/luke-overbey-37b342235/" target="_blank" >
                <BsLinkedin style={{color: 'white', fontSize: '90'}}/>
              </Link>
            </IconButton>
          </LinkedInCard>
          <EmailCard>
            <IconButton onClick={() => window.open('mailto:lucasaoverbey@gmail.com')}>
              <MdEmail style={{color: 'white', fontSize: '120'}}/>
            </IconButton>
          </EmailCard> */}
        </TopContainer>
    </AboutContainer>
  )
}

export default About