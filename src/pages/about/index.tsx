import { IconButton, Link } from '@mui/material';
import { AllCard, TopContainer, IntroCard, WelcomeCard, TopLeftContainer, ToolIcons, StyledScrollButton, ToolIconLabel, GithubCard, LinkedInCard, EmailCard, IntroTitle, IntroDescription, IntroTitleName, CardTitle } from './aboutstyles';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { CustomStyledButton } from '../../components/button/buttonstyles';
import { FaMapMarker } from 'react-icons/fa';
import Projects from '../work';
import Contact from '../contact';
import { AboutContainer } from './aboutstyles';
import GoogleMapReact from 'google-map-react'
import { mapStyles } from './mapStyles'
// @ts-ignore
import Fade from 'react-reveal/Fade';

// 29.760986166760972, -95.37964722026524

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const houstonLatLong = { lat: 29.760986166760972, lng: -95.37964722026524 }
const mapCenter = { lat: 29.760986166760972, lng: -95.37964722026524 }

const MyMarker = ({ text }: any) => (
  <div>
    <FaMapMarker fontSize='large' style={{color:'red'}}/>
  </div>
)

const About = () => {

  const handleMarkerClick = () => {
    console.log('clicked')
    window.open(
      'https://www.google.com/maps/place/Houston,+TX/@29.778271,-95.452775,11z/data=!4m15!1m8!3m7!1s0x8640b8b4488d8501:0xca0d02def365053b!2sHouston,+TX!3b1!8m2!3d29.7604267!4d-95.3698028!16zL20vMDNsMm4!3m5!1s0x8640b8b4488d8501:0xca0d02def365053b!8m2!3d29.7604267!4d-95.3698028!16zL20vMDNsMm4'
    )
  }

  return (
    <AboutContainer>
      <TopContainer>
          <TopLeftContainer>
            <Fade left>
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
            </Fade>
            <Fade left>
              <IntroCard>
                {/* <IntroTitle>This site is an active work in progress, Check back tomorrow for new updates!</IntroTitle> */}
                <GoogleMapReact
                  bootstrapURLKeys={{ key: String(apiKey) }}
                  
                  defaultCenter={ window.innerWidth > 600 ? mapCenter : houstonLatLong }
                  // zoom={14}
                  defaultZoom={10}
                  options={{
                    disableDefaultUI: true,
                    keyboardShortcuts: false,
                    styles: mapStyles,
                  }}
                  onClick={handleMarkerClick}
                >
                  <MyMarker
                  //29.887135937537185, -95.5622099168847
                    lat={29.887135937537185}
                    lng={-95.5622099168847}
                  />
                </GoogleMapReact>
              </IntroCard>
            </Fade>
          </TopLeftContainer>
          <Fade right>
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
          </Fade>
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