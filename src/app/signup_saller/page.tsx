'use client'
import PrivateRoute from "@/components/PrivateRouter"
import { Box, Button, TextField } from "@mui/material"
import { Poppins } from "next/font/google"
import useSignupSallerForm from "@/hooks/useSignupSallerForm"
import {useForm,  } from 'react-hook-form'
import { SallerSignupProps } from "@/types/saller_signup_model"
 const poppins = Poppins({
    subsets: ['latin'],
    weight: '400',
  })

export default function SignupSaller() {
    const { handleSubmit, register } = useForm<SallerSignupProps>()
    
    const { handleOnSubmit} = useSignupSallerForm()
    return (
        // <PrivateRoute>

                <div className='bg-[url("/Ellipse.Esquerda(12).svg")] bg-contain bg-center flex items-center justify-center w-full h-screen'>
                <main className=" w-1/2 h-[400px] flex items-center justify-center flex-col gap-8">
                <div className={poppins.className}>
                    <p className="text-[#324C63] font-bold text-4xl">Crie sua loja online</p>
                </div>
                <div className="flex items-center justify-center flex-row gap-7">
                    <div className="bg-[#324C63] w-40 h-[1px]">
                    </div>
                    <div>
                    <p className='text-[#324C63]'>ou</p>
                    </div>
                    <div className="bg-[#324C63] w-40 h-[1px]">
                    </div>
                </div>
                <div className='w-[60%]'>
                    <Box
                    component={'form'}
                    onSubmit={handleSubmit(handleOnSubmit)}
                    noValidate
                    autoComplete="off"
                    sx={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', alignItems: 'center'}} 
                    >
                    <div
                        className='w-full flex flex-col gap-8'
                    >
                        <TextField 
                        id="email" 
                        label="Nome Fantasia" 
                        variant="outlined" 
                        fullWidth 
                        {...register('nome_fantasia')}
                        sx={{
                            border: 'none !important',
                            borderRadius: '10px',
                            backgroundColor: '#AEBFDC',
                            boxShadow:
                                '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06)',
                        }}
                        autoComplete="off"
                        />
                        <TextField 
                        id="email" 
                        label="UF" 
                        variant="outlined" 
                        fullWidth 
                        {...register('uf')}
                        sx={{
                            border: 'none !important',
                            borderRadius: '10px',
                            backgroundColor: '#AEBFDC',
                            boxShadow:
                                '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06)',
                        }}
                        autoComplete="off"
                        />
                        <TextField 
                        id="senha" 
                        label="CNPJ" 
                        variant="outlined" 
                        fullWidth 
                        {...register('cnpj')}
                        sx={{
                            border: 'none !important',
                            borderRadius: '10px !important',
                            backgroundColor: '#AEBFDC',
                            boxShadow:
                                '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06)',
                        }}
                        autoComplete="off" 
                        />
                        <div className="w-full justify-end text-[#324C63]"><p className='text-end'>Esqueceu senha?</p></div>
                    </div>
                    <div
                        className='w-full flex flex-col gap-4 items-center justify-center'
                    >
                        <Button
                        type="submit"
                        variant="contained" 
                        color="primary" 
                        sx={{
                            backgroundColor: '#FFE069',
                            width: '50%',
                            color: '#324C63',
                            fontSize: '1.2rem',
                            padding: '8px',
                            borderRadius: '34px',
                            fontWeight: '700',
                            textTransform: 'none'
                        }}
                        >
                            Criar loja
                        </Button>
                    </div>
                    </Box>
                </div>
                </main>
            </div>
        // </PrivateRoute>
    )
};
