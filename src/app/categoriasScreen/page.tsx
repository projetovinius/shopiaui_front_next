"use client";
import * as React from 'react';
import Header from "../TelaPrincipal/componentesPrincipal/header/page";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SuperCard from "./hiperCard/superCard";
import { Open_Sans } from 'next/font/google';
import { Stack, Autocomplete, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const OpenSans = Open_Sans({
    subsets: ['latin'],
    weight: '400',
});

const mockProducts = [
    { id: 1, name: 'Camisa da Nike', price: 70.00, category: 'Camisas', imageUrl: "../../../public/camisa2.png" },
    { id: 1, name: 'Camisa Ranço', price: 50.00, category: 'Camisas', imageUrl: "../../../public/camisa3.png" },
    { id: 1, name: 'Camisa do Gojo', price: 60.00, category: 'Camisas', imageUrl: "../../../public/camisa4.png" },
    { id: 1, name: 'Camisa Social', price: 50.00, category: 'Camisas', imageUrl: "../../../public/camisa1.png" },
    { id: 1, name: 'Calça Cargo Militar', price: 80.00, category: 'Jeans', imageUrl: "../../../public/calca1.png" },
    { id: 1, name: 'Calça Jeans rasgada', price: 150.00, category: 'Jeans', imageUrl: "../../../public/calca2.png" },
    { id: 1, name: 'Calça Berge', price: 70.00, category: 'Jeans', imageUrl: "../../../public/calca3.png" },
    { id: 1, name: 'Calça Free Fire', price: 210.00, category: 'Jeans', imageUrl: "../../../public/calca4.png" },
    { id: 1, name: 'Jaqueta Jeans', price: 50.00, category: 'Jeans', imageUrl: "../../../public/jeans2.png" },
    { id: 1, name: 'Calça Baggy Jeans', price: 50.00, category: 'Jeans', imageUrl: "../../../public/jeans.png" },
    { id: 1, name: 'Jaqueta Jeans Preta', price: 150.00, category: 'Jeans', imageUrl: "../../../public/jeans3.png" },
    { id: 1, name: 'Moletom Rosa', price: 40.00, category: 'Moletom', imageUrl: "../../../public/moletom3.png" },
    { id: 1, name: 'Moletom infatil', price: 50.00, category: 'Moletom', imageUrl: "../../../public/moletom4.png" },
    { id: 1, name: 'Moletom Preto', price: 70.00, category: 'Moletom', imageUrl: "../../../public/moletom2.png" },
    { id: 1, name: 'Moletom Branco', price: 50.00, category: 'Moletom', imageUrl: "../../../public/camisa2.png" },

];

export default function Categorie() {
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
    const [searchTerm, setSearchTerm] = React.useState<string>('');

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const category = event.target.name;
        setSelectedCategories((prev) =>
            event.target.checked ? [...prev, category] : prev.filter((cat) => cat !== category)
        );
    };

    const filteredProducts = mockProducts.filter((product) => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
    });

    return (
        <div className={OpenSans.className}>
            <header>
                <Header />
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
                                <Typography sx={{ fontWeight: 'bold' }}>Categorias</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel
                                        control={<Checkbox name="Camisas" onChange={handleCategoryChange} />}
                                        label="Camisas"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="Moletom" onChange={handleCategoryChange} />}
                                        label="Moletom"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="Jeans" onChange={handleCategoryChange} />}
                                        label="Jeans"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="Calças" onChange={handleCategoryChange} />}
                                        label="Calças"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="Short" onChange={handleCategoryChange} />}
                                        label="Short"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="Sports" onChange={handleCategoryChange} />}
                                        label="Sports"
                                    />
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography sx={{ fontWeight: 'bold' }}>Procure por Categorias</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack spacing={2} sx={{ width: '30ch' }}>
                                    <Autocomplete
                                        id="free-solo-demo"
                                        freeSolo
                                        options={mockProducts.map((product) => product.name)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                color="primary"
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        borderRadius: '22px',
                                                        backgroundColor: '#CDCDE3',
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
                                            setSearchTerm(newInputValue);
                                        }}
                                    />
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="grid grid-cols-3 gap-10">
                        {filteredProducts.map((product) => (
                            <SuperCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
