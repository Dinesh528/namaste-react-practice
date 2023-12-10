import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from "../../assets/food-img.png";
import SignalWifiOffIcon from "@mui/icons-material/SignalWifiOff";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import useOnlineStatus from "../../utills/custom hooks/useOnlineStatus";
import { Link,useLocation  } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import userContext from '../../context/userContext';

const drawerWidth = 240;
const navItems = [
  { label: 'Home', link: '/' },
  { label: 'Gorcery', link: '/grocery' },
  { label: 'About', link: '/about' },
  { label: 'Contact Us', link: '/contact' },
];
function HeaderComponent(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const onlineStatus = useOnlineStatus();
  const location = useLocation();

  const userData = useContext(userContext);
  
  const [cartItems, setCartItems] = React.useState(0); 

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleAddToCart = () => {
   
    setCartItems((prevCount) => prevCount + 1);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img className="logo" src={Logo} alt="food logo" style={{ width: "100px", height: "100px" }} />
      </Typography>

      <Divider />
      <Typography variant="h6" sx={{ my: 2 }}>
        {onlineStatus ? (
          <SignalWifi4BarIcon />
        ) : (
          <SignalWifiOffIcon />
        )}
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Button 
                component={Link} 
                to={item.link} 
                sx={{
                  color: location.pathname === item.link ? 'red' : 'inherit', 
                }}
              >
                {item.label}
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "#010106" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img className="logo" src={Logo} alt="food logo" style={{ width: "100px", height: "100px" }} />
          </Typography>
          
          <Typography>
            {onlineStatus ? (
              <SignalWifi4BarIcon />
            ) : (
              <SignalWifiOffIcon />
            )}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (

              <Button 
                key={item.label} 
                component={Link} 
                to={item.link} 
                sx={{
                  color: location.pathname === item.link ? 'orange' : 'inherit',
                }}
                >
                {item.label}

              </Button>
            ))}
          </Box>
          <IconButton color="inherit" onClick={handleAddToCart}>
            <Badge badgeContent={cartItems} color="warning">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
            {userData.loggedInUser}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>

        </Typography>
      </Box>
    </Box>
  );
}

HeaderComponent.propTypes = {

  window: PropTypes.func,
};

export default HeaderComponent;