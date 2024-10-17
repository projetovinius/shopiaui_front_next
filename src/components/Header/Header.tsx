import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import Image from 'next/image';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));


export default function Header({ toggleDrawer, open }: HeaderProps) {
  const router = useRouter()
  return (
    <Box sx={{ width: '100vw',flexGrow: 1 }}>

      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#324C63' }}>
        <Toolbar>
          {
            !open &&  (    
            <IconButton
              onClick={() => toggleDrawer(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )
          }
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            <Image 
              src={'/Logo.png'}
              width={140}
              height={140}
              alt='image da logo shopiaui'
            />
          </Typography>
          <Button 
            onClick={()=> router.push('/TelaPrincipal')}
            sx={{
              color: 'white'
            }}
          >
            Área do cliente
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
