import styled from "@emotion/styled";
import { ContentCard } from "../../utils";

export const AllContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'top',
  justifyContent: 'top',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
})

export const TopContainer = styled(AllContainer)({
  flexDirection: 'row',
})

export const WelcomeCard = styled(ContentCard)({
  width: '300px',
  height: '700px',
});

export const IntroCard = styled(ContentCard)({
  width: '700px',
  height: '330px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'top',
  textAlign: 'left',
});

export const AllCard = styled(ContentCard)({
  width: '300px',
  height: '300px',
});

