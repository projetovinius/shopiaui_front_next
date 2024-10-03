"use client"
import * as React from 'react';
import Header from "../TelaPrincipal/componentesPrincipal/header/page"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SuperCard from "./hiperCard/superCard";
import TextField  from '@mui/material/TextField';
import { Avatar, createTheme, IconButton, InputAdornment, Menu, MenuItem, Tooltip } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { Open_Sans } from 'next/font/google'
import {useContext} from 'react'
import { AuthContext } from '@/contexts/AuthContext';
import useGetProductsQuery from '@/hooks/queries/useGetProductsQuery';


export const OpenSans = Open_Sans({
    subsets: ['latin'],
    weight: '400',
  })
  
export default function Categorie(){
    const {isAuthenticated, logout, token} = React.useContext(AuthContext)
  
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
    const { data = [], error, isLoading } = useGetProductsQuery(token);
  
    console.log(data)


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
    <div className={OpenSans.className}>
        <header>
            <Header/>
        </header>
        <div className="flex flex-row mt-8 ml-8 gap-5">
            <div className="w-[25%] h-[100%]">
                    <div>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography sx={{fontWeight:'bold'}}>Categorias</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography sx={{display:'flex',flexDirection:'column'}}> 
                        <FormControlLabel  control={<Checkbox />} label="Camisas" />
                        <FormControlLabel  control={<Checkbox />} label="Moletom" />
                        <FormControlLabel  control={<Checkbox />} label="Jeans" />
                        <FormControlLabel  control={<Checkbox />} label="Calças" />
                        <FormControlLabel  control={<Checkbox />} label="Short" />
                        <FormControlLabel  control={<Checkbox />} label="Sports" />
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel2-header"
                        >
                        <Typography sx={{fontWeight:'bold'}}>Procure por Categorias</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Stack spacing={2} sx={{ width: '30ch' }}>
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
                        </AccordionDetails>
                    </Accordion>
                    </div>
            </div>
            <div className="flex flex-row item-center justify-around w-[1200px]">
                <div className="flex flex-col gap-10">
                <SuperCard/>
                <SuperCard/>
                </div>
                <div className="flex flex-col gap-10">
                <SuperCard/>
                <SuperCard/>
                </div>
                <div className="flex flex-col gap-10">
                <SuperCard/>
                <SuperCard/>
                </div>
            </div>
        </div>
    </div>
    )
}