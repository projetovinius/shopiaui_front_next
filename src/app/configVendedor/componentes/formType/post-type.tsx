"use client"
import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import createTypeProduct from '../apis/apiTipoProduto/create-type-product';

const createTypeForm = z.object({
name: z.string().min(1).max(15),
description: z.string().min(1).max(144) 
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
        <form onSubmit={handleSubmit(handleCreateTypeProduct)}>
            <div className='flex flex-row ml-4'>
            <FormControl sx={{ '& > :not(style)': { m: 1, width: '50ch' } }} >
                    <TextField 
                        id="outlined-basic" 
                        label="tipo de Produto" 
                        variant="outlined" 
                        {...register('name')}
                    />
                </FormControl>  
             <FormControl sx={{ width: '27ch',marginLeft:'7px' }}>
                  <InputLabel id="demo-simple-select-label">Tipo de Produto</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Tipo de Produto"
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
            </div>
        </form>
    )
}