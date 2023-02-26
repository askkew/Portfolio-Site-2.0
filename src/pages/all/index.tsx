import { IconButton, Link } from '@mui/material';
import { AllCard, TopContainer, IntroCard, AllContainer, WelcomeCard, TopLeftContainer, ToolIcons, StyledScrollButton, ToolIconLabel, GithubCard, LinkedInCard, EmailCard, IntroTitle, IntroDescription } from './allStyles';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { CustomStyledButton } from '../../components/button/buttonstyles';

const All = () => {
  return (
    <AllContainer>
      <TopContainer>
        <TopLeftContainer>
          <IntroCard>
            <img src="mecomputer.png" style={{height: '60%'}}/>
            <div>
              <IntroTitle variant='h4'>Hello my name is Lucas Overbey!</IntroTitle>
              <IntroDescription variant='h6'>I have been coding for almost 6 years but recently focused on web development near the end of my education at UTSA, where I graduated with a Bachelor of Science in Computer Science</IntroDescription>
              <div>
                <CustomStyledButton style={{margin: '0 5px 0 5px'}}>contact</CustomStyledButton>
                <CustomStyledButton style={{margin: '0 5px 0 5px'}}>resume</CustomStyledButton>
              </div>
            </div>
          </IntroCard>
          <IntroCard>
            <h1 style={{color: 'white'}}>MAP</h1>
            {/* <img src="medplusprimary.png" style={{height: '50%'}}/>
            <img src="TDSCprimary.png" style={{height: '50%'}}/> */}
          </IntroCard>
        </TopLeftContainer>
        <WelcomeCard>
          <h3>Toolkit</h3>
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
      </TopContainer>
      <TopContainer>
        <GithubCard>
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
        </EmailCard>
      </TopContainer>
    </AllContainer>
  )
}

export default All