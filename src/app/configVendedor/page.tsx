"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Session, Router, Navigation } from '@toolpad/core';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AddIcon from '@mui/icons-material/Add';
import { useMemo } from 'react';
import { Poppins } from 'next/font/google';
import HorizontalLinearStepper from './componentes/progress/progress';
import PersonIcon from '@mui/icons-material/Person';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Construindo from '../construindo/page'
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface NavigationItem {
  kind?: string;
  segment?: string;
  children?: NavigationItem[];
}

const NAVIGATION: Navigation = [
  {
    segment: 'conta',
    title: 'Conta',
    icon: <PersonIcon />,
  },
  {
    segment: 'postLoja',
    title: 'Cadastrar Loja',
    icon: <AddBusinessIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Controle de Loja',
  },
  {
    segment: 'produtos',
    title: 'Produtos',
    icon: <LocalMallIcon />,
    children: [
      {
        segment: 'postProdutos',
        title: 'Cadastrar Produto',
        icon: <AddIcon />,
      },
      {
        segment: 'getProdutos',
        title: 'Meus Produtos',
        icon: <AutoStoriesIcon />,
      },
    ],
  },
];


const demoTheme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
},
  
});

function findSegment(navItems: NavigationItem[], pathname: string, parentSegment: string = ''): string | undefined {
  console.log('findSegment chamada com pathname:', pathname);
  const cleanPathname = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  for (const item of navItems) {
    const currentSegment = parentSegment ? `${parentSegment}/${item.segment}` : item.segment;
    const cleanSegment = currentSegment?.startsWith('/') ? currentSegment.slice(1) : currentSegment;

    if (cleanSegment === cleanPathname) {
      console.log('Segmento encontrado:', item);
      return currentSegment; 
    }

    if (item.children) {
      const found = findSegment(item.children, pathname, currentSegment);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
}

function exibContent({ pathname }: { pathname: string }){
  const currentSegment = findSegment(NAVIGATION, pathname);
  if (!currentSegment) {
    return 'Página não encontrada'; 
  }
  switch(currentSegment){
    case 'produtos/postProdutos':
      return <div>
          <HorizontalLinearStepper/>
      </div>
    case 'conta':
        return <Construindo/>;
      
    case 'produtos/getProdutos':
          return 'Meus Produtos';
      
      default:
       return 'pagina não encontrada'

  }
}

function DemoPageContent({ pathname }: { pathname: string }) {
  const cleanPathname = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  const currentContent = useMemo(() => exibContent({ pathname: cleanPathname }), [cleanPathname]);

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>{currentContent}</Typography>
    </Box>
  );
}

interface DemoProps {
 
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/singUp');

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);
  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: <img src="/white.png" alt="logo" />,
        title:'ShoPiauí',
      }}
    >
      <DashboardLayout >
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}