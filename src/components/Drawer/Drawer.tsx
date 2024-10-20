import { DrawerProps } from "./drawer";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Typography from "@mui/material/Typography";
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from "next/navigation";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}



export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: theme.spacing(0, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-between',
}));


const menuItems = [
  { text: 'Dashboard', route: 'dashboard' },
  { text: 'Produtos', route: 'products' },
  { text: 'Criar Produto', route: 'saller_add_product' }
];

export default function DrawerComponent({onNavigate, toggleDrawer, setOpen}: DrawerProps) {
  const theme = useTheme();
  const router = useRouter();


  const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
        <Box sx={{ width: 250 }} role="presentation" >
            <DrawerHeader>
              <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    itemsAlign: 'start',
                    width: '100%',
                    height: '100%'
                  }}
                >
                <Typography sx={{
                  paddingRight: '15px',
                  fontWeight: '600',
                  color: '#324C63'
                }}>
                    Area de Trabalho
                </Typography>
                <Typography sx={{
                  fontSize: '.9rem',
                  color: '#324C63'
                }}>
                    bruninha@dev.com
                </Typography>
              </Box>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
          </DrawerHeader>
        <Divider />
        <List>
          {['Conta'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton  onClick={() => onNavigate(item.route)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        </List>
      </Box>
    )
};
