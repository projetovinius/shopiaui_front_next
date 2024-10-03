"use client";
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu'; 
import Image from 'next/image';
import TextField  from '@mui/material/TextField';
import { Avatar, createTheme, FormControl, IconButton, InputAdornment, Menu, MenuItem, Tooltip } from '@mui/material';
import { ThemeProvider } from '@emotion/react'
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { Open_Sans } from 'next/font/google'

export const OpenSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
})
const theme = createTheme({
  palette:{
    primary:{
      main:'#000'
    },
    secondary:{
      main:'#fff'
    }
  },
  typography:{
    fontFamily: OpenSans.style.fontFamily
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px', 
            '& textarea': {
              minHeight: '10px', // ajusta a altura mínima do textarea
            },
          },
        },
      },
    },
  },
})

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Header() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
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
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bg-[#324C63] w-full h-16 flex items-center justify-start px-4">
      <ThemeProvider theme={theme}>
        <div className='w-[30%] flex flex-row items-center justify-baseline'>
          <div>
            {(['left'] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon sx={{color:'white',fontSize:'29px'}}/>
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <div className='mt-1 ml-2'>
            <Image
            src='/Logo.png'
            width={130}
            height={100}
            alt='logo'
            />
          </div>
        </div>
      <div className='w-[70%] flex flex-row items-center justify-between'>
        <Stack spacing={2} sx={{ width: '60ch' }}>
        <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option.title)} 
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                color="primary"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '22px',
                    backgroundColor: '#CDCDE3',
                    '& input': {
                      height: '10px',
                      paddingBottom: '50px',
                    },
                  },
                }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          onInputChange={(event, newInputValue) => {
            console.log(newInputValue); // Para ver o que está sendo digitado
          }}
        />
        </Stack>
        <div className='flex flex-row items-center justify-center gap-6'>
          <ShoppingCartIcon color='secondary' sx={{fontSize:'27px', cursor:'pointer'}}/>
          <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
          </React.Fragment>
        </div>
      </div>
      </ThemeProvider>
    </div>
  );
}


const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
]