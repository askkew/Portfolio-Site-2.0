import { IconButton, Link } from "@mui/material"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { CustomStyledButton } from "../../components/button/buttonstyles"
import { EmailCard, GithubCard, LinkedInCard } from "../all/allStyles"
import { ContactCard, ContactContainer, ContactLeftContainer, ContactRightContainer, CustomInputField } from "./contactstyles"

const Contact = () => {
  return (
    <ContactContainer>
      <ContactCard>
        <ContactLeftContainer>
          <img src="mecomputer.png" style={{height: '40%', width: '50%'}}/>
          <h2>Thank you for checking out my page, I am currently looking to utilize my skills with a new team of creative designers and developers!</h2>
        </ContactLeftContainer>
        <ContactRightContainer>
          <h1>Contact</h1>
          <CustomInputField></CustomInputField>
          <CustomInputField></CustomInputField>
          <CustomInputField style={{height: '200px', borderRadius: '25px'}}></CustomInputField>
          <CustomStyledButton style={{width: '100px'}}>Submit</CustomStyledButton>
        </ContactRightContainer>
      </ContactCard>
      <div style={{display: 'flex', flexDirection: 'row'}}>
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
      </div>
    </ContactContainer>
  )
}

export default Contact