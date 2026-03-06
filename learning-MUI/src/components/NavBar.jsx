import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from "react-router-dom"



const theme = createTheme({
  palette: {
    ochre: {
      main: '#00ccff',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
});

export default function NavBar() {
  return (
     <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="ochre">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
             
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Portal
          </Typography>
          <Stack direction="row" spacing={2}></Stack>
            <Button color="inherit"><Link to="/dashboard">Dashboard</Link></Button>
            <Button color="inherit"><Link to="/students">Students</Link></Button>
            <Button color="inherit"><Link to="/courses">Courses</Link></Button>
            <Button color="inherit"><Link to="/profile">Profile</Link></Button>       
            
          <Stack/>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
