import { IconButton, Link } from "@mui/material"
import { CustomStyledButton } from "../../components/button/buttonstyles"
import { EmailCard, GithubCard, LinkedInCard, StyledBSGithub, StyledBsLinkedin, StyledMdEmail } from "../all/allStyles"
import { ContactCard, ContactContainer, ContactLeftContainer, ContactRightContainer, CustomInputField, SocialMediaContainer } from "./contactstyles"

const Contact = () => {
  return (
    <ContactContainer>
      <ContactCard>
        <ContactLeftContainer>
          <img src="/me3.png" style={{height: '40%', width: '50%'}}/>
          <h2>Thank you for checking out my page, I am currently looking to utilize my skills with a new team of creative designers and developers!</h2>
        </ContactLeftContainer>
        <ContactRightContainer>
          <h1>Contact</h1>
          <CustomInputField></CustomInputField>
          <CustomInputField></CustomInputField>
          <CustomInputField style={{height: '200px', borderRadius: '25px'}}></CustomInputField>
          <CustomStyledButton style={{width: '100px', marginTop: '12px'}}>Submit</CustomStyledButton>
        </ContactRightContainer>
      </ContactCard>
      <SocialMediaContainer>
        <GithubCard>
          <IconButton>
            <Link href="https://github.com/askkew" target="_blank" >
              <StyledBSGithub />
            </Link>
          </IconButton>
        </GithubCard>
        <LinkedInCard>
          <IconButton>
            <Link href="https://www.linkedin.com/in/luke-overbey-37b342235/" target="_blank" >
              <StyledBsLinkedin />
            </Link>
          </IconButton>
        </LinkedInCard>
        <EmailCard>
          <IconButton onClick={() => window.open('mailto:lucasaoverbey@gmail.com')}>
            <StyledMdEmail />
          </IconButton>
        </EmailCard>
      </SocialMediaContainer>
    </ContactContainer>
  )
}

export default Contact