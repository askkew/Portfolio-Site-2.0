import { IconButton, Link } from "@mui/material"
import { useState } from "react"
import { CustomStyledButton } from "../../components/button/buttonstyles"
import { EmailCard, GithubCard, LinkedInCard, StyledBSGithub, StyledBsLinkedin, StyledMdEmail } from "../all/allStyles"
import { ContactCard, ContactContainer, ContactLeftContainer, ContactRightContainer, CustomInputField, SocialMediaContainer } from "./contactstyles"
// @ts-ignore
// import Fade from 'react-reveal/Fade';

const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('email: ', email)
    console.log('name: ', name)
    console.log('message: ', message)
    setEmailSent(true)
  }

  return (
    <ContactContainer>
      {/* <Fade top> */}
        <ContactCard>
          <ContactLeftContainer>
            <img src="/me3.png" style={{height: '40%', width: '50%'}}/>
            <h2>Thank you for checking out my page, I am currently looking to utilize my skills with a new team of creative designers and developers!</h2>
          </ContactLeftContainer>
          <ContactRightContainer>
            <h1>Contact</h1>
            <CustomInputField value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}></CustomInputField>
            <CustomInputField value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></CustomInputField>
            <CustomInputField value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)} style={{height: '200px', borderRadius: '25px'}}></CustomInputField>
            <CustomStyledButton onClick={handleSubmit} style={{width: '100px', marginTop: '12px'}}>Submit</CustomStyledButton>
            {/* {!emailSent && <h2 style={{color: 'red', display: 'none' }}>Email Sent!</h2>}
            {emailSent && <h2 style={{color: 'green'}}>Email Sent!</h2>} */}
          </ContactRightContainer>
        </ContactCard>
      {/* </Fade> */}
      <SocialMediaContainer>
          <GithubCard>
            <IconButton>
              <Link href="https://github.com/askkew" target="_blank" >
                <StyledBSGithub />
              </Link>
            </IconButton>
          </GithubCard>
        {/* </Fade>
        <Fade bottom> */}
          <LinkedInCard>
            <IconButton>
              <Link href="https://www.linkedin.com/in/luke-overbey-37b342235/" target="_blank" >
                <StyledBsLinkedin />
              </Link>
            </IconButton>
          </LinkedInCard>
        {/* </Fade>
        <Fade right> */}
          <EmailCard>
            <IconButton onClick={() => window.open('mailto:lucasaoverbey@gmail.com')}>
              <StyledMdEmail />
            </IconButton>
          </EmailCard>
        {/* </Fade> */}
      </SocialMediaContainer>
    </ContactContainer>
  )
}

export default Contact