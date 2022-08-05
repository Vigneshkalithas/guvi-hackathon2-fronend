import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate, Link} from "react-router-dom";





const ResponsiveAppBar = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const doLogout = () => {
    localStorage.removeItem('react-app-token');
    navigate('/');
  }

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            // to="/dashboard"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Book<span className='titleMy px-1'>my</span>show
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem  onClick={()=>navigate("/movies")}>
                  <Typography textAlign="center">Movies</Typography>
                </MenuItem>
                <MenuItem  onClick={()=>navigate("/userlogin")}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem  onClick={()=>navigate("/adminlogin")}>
                  <Typography textAlign="center">Admin</Typography>
                </MenuItem>
                {/* <MenuItem  onClick={()=>navigate("/register")}> */}
                <MenuItem  onClick={()=>navigate("/")}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                
             
            </Menu>
          </Box>
          <MovieCreationOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            // href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Bookmyshow
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
              <Button
               
                onClick={()=>navigate("/movies")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Movies
              </Button>
              <Button
               
               onClick={()=>navigate("/userlogin")}
               sx={{ my: 2, color: 'white', display: 'block' }}
             >
               Login
             </Button>
             <Button
               
               onClick={()=>navigate("/adminlogin")}
               sx={{ my: 2, color: 'white', display: 'block' }}
             >
               Admin
             </Button>
             <Button
               
              //  onClick={()=>navigate("/userregister")}
               onClick={()=>navigate("/")}
               sx={{ my: 2, color: 'white', display: 'block' }}
             >
               Home
             </Button>
            
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
              <MenuItem><Typography>Profile</Typography></MenuItem>
              <MenuItem><Typography onClick={doLogout}>Logout</Typography></MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
