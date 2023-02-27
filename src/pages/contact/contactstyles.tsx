import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import { ContentCard } from "../../utils";

export const ContactContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'top',
  justifyContent: 'top',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
})

export const ContactCard = styled(ContentCard)({
  width: '100%',
  height: '500px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'top',
  padding: '2rem',
});

export const ContactLeftContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'top',
  width: '33%',
  margin: '0 auto',
})

export const ContactRightContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'top',
  width: '66%',
  margin: '0 auto',
})

export const CustomInputField = styled(InputBase)({
  borderRadius: '50px',
  padding: '0.5rem',
  margin: '0.5rem',
  width: '66%',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
});