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

export default function FormCreateCategory(){
    const {token} = React.useContext(AuthContext)
    const {handleOnSubmit} = useCreateCategoryForm(token)
    const {register, handleSubmit } = useForm<CategoriesProps>()
      
    return(
        <form className='w-full h-[60vh] overflow-hidden' onSubmit={handleSubmit(handleOnSubmit)}>
            <div className='w-[100%] h-[100%] flex flex-col items-center justify-center gap-14'>
              <p className='text-slate-500 text-center text-2xl'>Caso ja tenha uma categoria de produto cadastrada clique em "Prosseguir".</p>  
              <div className="w-full flex flex-row items-center justify-center gap-8 py-8">
                <FormControl
                  sx={{
                    width: '20%',
                    height: '100%'
                  }}
                >
                        <TextField 
                            id="outlined-basic" 
                            label="Categoria" 
                            variant="outlined" 
                            color='primary'
                            {...register('name')}
                        />
                  </FormControl>
                  <Button sx={{
                      textTransform: 'none', 
                      backgroundColor: '#334d63', 
                      height: '80%', 
                      width: '10%',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1rem'
                    }} 
                    type='submit'
                  >
                    Criar categoria
                  </Button>
              </div>
            </div>
        </form>
    )
}