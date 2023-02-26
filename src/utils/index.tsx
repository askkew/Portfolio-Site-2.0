import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const primary = 'rgb(189,46,46)';

export const ContentCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'top',
  padding: '0.3rem',
  margin: '1rem',
  // background: 'rgb(13,13,14)',
  borderRadius: '50px',
  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
});
