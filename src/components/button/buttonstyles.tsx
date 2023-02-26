import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CustomStyledButton = styled(Button)({
  background: 'linear-gradient(to bottom right, #EF4765, #FF9A5A)',
  border: 0,
  borderRadius: 12,
  color: 'white',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: '-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 2.5,
  outline: 'transparent',
  padding: '0 1rem',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'box-shadow .2s ease-in-out',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  whiteSpace: 'nowrap',
  '&:focus': {
    boxShadow: '0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5)',
  },
  '&:hover': {
    boxShadow: '0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5)',
  },
});