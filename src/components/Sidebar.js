import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  IconButton,
  Toolbar,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar({ open, toggleDrawer }) {
  return (
    <Drawer open={open} onClose={toggleDrawer}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Box
        sx={{ flexGrow: 1, width: 252 }}
        role="presentation"
        variant="persistent"
        anchor="left"
      >
        <Divider />
        <List>
          {['Home', 'Stocks', 'Admin'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
