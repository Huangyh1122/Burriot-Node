import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key="About Us" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'About Us'} />
          </ListItemButton>
        </ListItem>
        <Divider></Divider>
        <ListItem key="Burrito Validator" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MemoryOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Burrito College'} />
          </ListItemButton>
        </ListItem>
        <Divider></Divider>
        <ListItem key="Burrito College" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SchoolOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Burrito College'} />
          </ListItemButton>
        </ListItem>
        <Divider></Divider>
        <ListItem key="Burrito Monitor" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MonitorHeartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={'Burrito Monitor'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: 'black' }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor={'right'}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
