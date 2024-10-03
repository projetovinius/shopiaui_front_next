"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputAdornment } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Stack from '@mui/material/Stack';
import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material';
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { createdProduct } from '../apis/apiProduto/create-product';
import CreatedTypeProduct from '../formType/post-type';

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

const theme = createTheme({
    palette: {
       primary:{
        main:'#324C63'
       },
        warning: {
            main: '#000000',
        },
        secondary: {
            main: '#FFE069',
        },
    },
    typography: {
        fontFamily: poppins.style.fontFamily,
        button: {
            fontWeight: 500,
            textTransform: 'none',
            fontSize: '18px',
        },
    },
    shape: {
        borderRadius: 10,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 30,
                },
            },
        },
    },
});

const createdProductForm = z.object({
    name: z.string().min(1).max(30),
    description: z.string().min(1).max(144),
    price: z.number(),
    quantity: z.number(),
  })

type CreatedProductForm = z.infer<typeof createdProductForm>



export default function FormProduto() {
    const {register, handleSubmit } = useForm<CreatedProductForm>({
    resolver: zodResolver(createdProductForm)
      });
        
    async function handleCreateProduct(data: CreatedProductForm ) {
        console.log('dados recebidos',data)
        await createdProduct ({
          name: data.name,
          description: data.description,
          price: data.price,
          quantity: data.quantity
        })
    }

    return (
        <form onSubmit={handleSubmit(handleCreateProduct)} className='w-[100%] mr-[200px] flex flex-col'>  
            <ThemeProvider theme={theme}>
            <div className='flex flex-row'>
                <Box sx={{ '& > :not(style)': { m: 1,display:'flex',flexDirection:'column' } }}>
                <FormControl sx={{ '& > :not(style)': { m: 1, width: '59ch' } }} >
                    <TextField 
                        id="outlined-basic" 
                        label="Nome do Produto" 
                        variant="outlined" 
                        {...register('name')}
                    />
                </FormControl>  

                <FormControl sx={{ '& > :not(style)': { m: 1, width: '59ch' } }}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Descrição"
                        multiline
                        rows={4}
                        defaultValue=""
                        {...register('description')}
                    />
                </FormControl>
                
                </Box>
                
                <Box sx={{ width: '220px', display: 'flex', flexDirection: 'column',marginTop:'8px',gap:'75px'}}>
                    <FormControl sx={{ '& > :not(style)': { m: 1, width: '27ch' } }}>
                        <TextField
                            label="Preço do Produto"
                            id="outlined-start-adornment"
                            {...register('price')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                    </FormControl>

                    <FormControl sx={{ '& > :not(style)': { m: 1, width: '27ch' } }}>
                        <TextField 
                            id="outlined-basic" 
                            label="Quantidade Disponível" 
                            variant="outlined" 
                            {...register('quantity')}
                        />
                    </FormControl>
                </Box>
            </div>
            <div>
             <CreatedTypeProduct/>
            </div>
                <Stack
                    spacing={2}
                    direction="row"
                    sx={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '10px',
                    }}
                >
                    <Button
                        color="secondary" 
                        type='submit'
                        variant="contained"
                        sx={{ width: '223px', height: '45px' }} 
                    >
                        Cadastrar
                    </Button>
                </Stack>
            </ThemeProvider> 
        </form>
    );
}
