"use client"
import * as React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, ThemeProvider } from "@mui/material";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import createTypeProduct from '../apis/apiTipoProduto/create-type-product';
import { createTheme } from '@mui/material';

const createTypeForm = z.object({
name: z.string().min(1).max(15),
description: z.string().min(1).max(144) 
})
const theme = createTheme({
 palette:{
  primary:{
    main:"#000"
  },
  secondary:{
    main:'#FFE069'
  }
 }
})
type CreateTypeProduct = z.infer<typeof createTypeForm>

export default function CreatedTypeProduct(){
    const {register, handleSubmit } = useForm<CreateTypeProduct>({
    resolver: zodResolver(createTypeForm)
      });
      
      async function handleCreateTypeProduct(data: CreateTypeProduct  ) {
        console.log('dados recebidos',data)
        await createTypeProduct ({
          name: data.name,
          description: data.description,
        })
    }
    return(
        <form className='w-[1045px] h-[300px]' onSubmit={handleSubmit(handleCreateTypeProduct)}>
          <ThemeProvider theme={theme}>
            <div className=' items-center flex-row ml-[8px] gap-[10px] pt-7'>
            <FormControl sx={{ '& > :not(style)': { m: 1, width: '59ch' } }} >
                    <TextField 
                        id="outlined-basic" 
                        label="Tipo de Produto" 
                        variant="outlined" 
                        color='primary'
                        {...register('name')}
                    />
              </FormControl>
              <p className='text-slate-500'>Caso ja tenha uma categoria de produto cadastrada clique em prosseguir</p>  
            </div>
            </ThemeProvider>
        </form>
    )
}