'use client'
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Header from "@/components/Header/Header";
import DrawerComponent, { DrawerHeader } from "@/components/Drawer/Drawer";
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import SallerDashBoard from "../saller_dashboard/page";
import HorizontalLinearStepper from "../configVendedor/componentes/progress/progress";
import ProductSaller from "../products_saller/page";

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
        return <ProductSaller/>;
      case "saller_add_product":
        return <HorizontalLinearStepper/> 
      default:
        return <SallerDashBoard />;
    }
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setOpen(false); 
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
          flexDirection: 'row',
        }}
      >
        <Drawer 
          variant="persistent"
          sx={{
            width: drawerWidth, 
            flexShrink: 0, 
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
