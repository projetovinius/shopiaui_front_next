import Header from "../TelaPrincipal/componentesPrincipal/header/page"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SuperCard from "./hiperCard/superCard";
import { Open_Sans } from "next/font/google";

export const OpenSans = Open_Sans({
    subsets: ['latin'],
    weight: '400',
  })
  
export default function Categorie(){
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
                        <FormControlLabel required control={<Checkbox />} label="Required" />
                        <FormControlLabel required control={<Checkbox />} label="Required" />
                        <FormControlLabel required control={<Checkbox />} label="Required" />

                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        >
                        <Typography>Header</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </div>
            </div>
            <div className="flex flex-row gap-5">
                <div className="flex flex-col gap-5">
                <SuperCard/>
                <SuperCard/>
                </div>
                <div className="flex flex-col gap-5">
                <SuperCard/>
                <SuperCard/>
                </div>
                <div className="flex flex-col gap-5">
                <SuperCard/>
                <SuperCard/>
                </div>
            </div>
        </div>
    </div>
    )
}