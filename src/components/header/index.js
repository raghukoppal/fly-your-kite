import {
  AppBar,
  Box,
  Stack,
  Typography,
  Toolbar,
  IconButton,
  Tooltip,
  Avatar,
} from '@mui/material';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = ({ toggleDrawer }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fly Your Kite
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <IconButton
            size="large"
            aria-label="show 10 new notifications"
            color="inherit"
          >
            <Badge badgeContent={10} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Sharp" src="/1.png" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
