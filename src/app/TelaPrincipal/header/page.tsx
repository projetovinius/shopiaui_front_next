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
import { Avatar, createTheme, IconButton, InputAdornment, Menu, MenuItem, Tooltip } from '@mui/material';
import { ThemeProvider } from '@emotion/react'
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { Open_Sans } from 'next/font/google'
import {useContext} from 'react'
import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import useGetProductsQuery from '@/hooks/queries/useGetProductsQuery';

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
  const router = useRouter()
  const {isAuthenticated, logout, token} = useContext(AuthContext)
  const { data = [], error, isLoading } = useGetProductsQuery(token);

  console.log(data)

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

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
    const [bgColor, setBgColor] = React.useState('#');
  
    React.useEffect(() => {
      setBgColor(getRandomColor());
    }, []);
  

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
            options={data.map((option: any) => option.name)} 
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
            console.log(newInputValue);
          }}
        />
        </Stack>
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