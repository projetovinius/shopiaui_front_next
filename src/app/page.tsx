"use client"
// import Header from "./header/page"
import Header from './TelaPrincipal/componentesPrincipal/header/page'
import SplideComponent from './TelaPrincipal/componentesPrincipal/slide/slides'
import CategoriasType from './TelaPrincipal/componentesPrincipal/categorias/categorias'
import { Open_Sans } from 'next/font/google'
import SlideProdutos from './TelaPrincipal/componentesPrincipal/slideProdutos/slideProdutos'

export const OpenSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
})

export default function Home(){
    return(
        <div className={OpenSans.className}>
            <header>
                <Header/>
            </header>
            <div>
              <SplideComponent/>
            </div>
            <div>
                <CategoriasType/>
            </div>
            <div>
                <SlideProdutos/>
            </div>
        </div>
    )
}