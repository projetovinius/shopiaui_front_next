'use client'
import * as React from 'react';
import { Poppins } from 'next/font/google'
import Formulario from './componentes/formulario/form';
import GoogleButtons from './componentes/google/logGoogle';
export const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
})

export default function SignUpScreen() {    
  return (
    <div className='bg-[url("/fundoBorrado.jpeg")] bg-cover bg-center flex items-center justify-center w-full h-screen'>
      <main className=" w-1/2 h-[400px] flex items-center justify-center flex-col">
        <div className={poppins.className}>
          <p className="text-[#324C63] font-bold text-4xl mb-10">Registre-se</p>
        </div>
        <div>
          <Formulario/>
        </div> 
      </main>
    </div>
  )
}
