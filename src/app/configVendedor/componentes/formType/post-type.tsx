"use client"
import * as React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, ThemeProvider } from "@mui/material";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import createTypeProduct from '../apis/apiTipoProduto/create-type-product';
import { createTheme } from '@mui/material';
import useCreateCategoryMutation from '@/hooks/mutations/useCreateCategoryMutation';
import { CategoriesProps } from '@/types/categories_model';
import { AuthContext } from '@/contexts/AuthContext';
import useCreateCategoryForm from '@/hooks/useCreateCategoryForm';

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
    const {token} = React.useContext(AuthContext)
    const {handleOnSubmit} = useCreateCategoryForm(token)
    const {register, handleSubmit } = useForm<CategoriesProps>()
      
    return(
        <form className='w-[1028px] h-[281px]' onSubmit={handleSubmit(handleOnSubmit)}>
          <ThemeProvider theme={theme}>
            <div className='w-[80%] items-center flex-row justify-center ml-[8px] gap-[10px] pt-7'>
              <div className="w-full flex flex-col items-center justify-between gap-4 py-3">
                <FormControl sx={{ '& > :not(style)': { m: 1, width: '59ch' } }} >
                        <TextField 
                            id="outlined-basic" 
                            label="Categoria" 
                            variant="outlined" 
                            color='primary'
                            {...register('name')}
                        />
                  </FormControl>
                  <Button sx={{textTransform: 'none', backgroundColor: '#FFE069'}} type='submit'> Nova categoria</Button>
              </div>
              <p className='text-slate-500'>Caso ja tenha uma categoria de produto cadastrada clique em prosseguir</p>  
            </div>
            </ThemeProvider>
        </form>
    )
}