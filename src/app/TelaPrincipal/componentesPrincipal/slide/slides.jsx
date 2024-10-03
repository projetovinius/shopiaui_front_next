import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

export default function SplideComponent(){
    return(
        <Splide 
        className=' w-full h-[440px]'
            aria-label="My Favorite Images"
            options={{
              type:'loop',
              autoplay:true,
              interval:3000,
              arrows:false,
            }}
            >
              <SplideSlide >
                <div className='bg-[url("/art.jpg")] w-full h-[440px] bg-cover bg-center bg-no-repeat'></div>
              </SplideSlide>
              <SplideSlide >
              <div className='bg-[url("/horse.jpg")] w-full h-[440px] bg-cover bg-center bg-no-repeat'></div>
              </SplideSlide>
        </Splide>
    )
}