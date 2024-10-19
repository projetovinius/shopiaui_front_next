'use client'
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Header from "@/components/Header/Header";
import DrawerComponent, { DrawerHeader } from "@/components/Drawer/Drawer";
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import SallerDashBoard from "../saller_dashboard/page";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`, // Posição inicial
  ...(open && { // Aplica a margem esquerda quando o Drawer está aberto
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function SallerWorkArea() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <SallerDashBoard />;
      case "products":
        return <Typography>Em construção: Produtos</Typography>; // Exemplo de conteúdo
      case "create_product":
        return <Typography>Em construção: Criar Produto</Typography>; // Exemplo de conteúdo
      default:
        return <SallerDashBoard />;
    }
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setOpen(false); // Fecha o Drawer ao selecionar
  };

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <>
      <Header open={open} toggleDrawer={toggleDrawer} />
      <Box 
        sx={{
          display: 'flex',
          height: '100vh',  
          flexDirection: 'row', // Corrigido para 'row'
        }}
      >
        <Drawer 
          variant="persistent"
          sx={{
            width: drawerWidth, // Defina a largura do Drawer
            flexShrink: 0, // Impede que o Drawer encolha
          }} 
          open={open} 
          onClose={() => toggleDrawer(false)}
        >
          <DrawerComponent 
              onNavigate={handlePageChange}
              setOpen={setOpen}
              toggleDrawer={toggleDrawer} 
          />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          {renderPage()}
        </Main>
      </Box>
    </>
  );
}
