import styled from '@emotion/styled';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import logo from '../assets/logo.png';

const Navbar = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;

export const NavHeading = styled(Typography)`
  font-size: 1.5rem;
  font-style: italic;
  font-family: cursive;
  padding-left: 10px;
`;

function Header() {
  return (
    <Navbar position="static">
      <Toolbar>
        <Box component="img" src={logo} alt="logo" width={40} />
        <NavHeading>Dev Pen</NavHeading>
      </Toolbar>
    </Navbar>
  );
}

export default Header;
