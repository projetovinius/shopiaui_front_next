import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SlideProdutos(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      async function fetchPosts() {
        const response = await fetch('');
        const data = await response.json();
        setPosts(data);
      }
  
      fetchPosts();
      
    }, []);
    return(
        <div>
            <div><p className="font-bold text-center text-[20px] mb-9">Principais Destaques Para Você</p></div>
            <div>
            <div >
            <Splide
                    options={{
                    perPage: 5,
                    perMove: 1,
                    rewind:true,
                    pagination:false,
                    fixedWidth:245,
                    gap:10,
                    fixedHeight:340
                    }}
                    >
                    {posts.map((post) => 
                        <SplideSlide key={post.Produto_id}>
                        <Link  href={'#'}>          
                            <Card  produto={{
                                Nome: post.name,
                                Preco: post.price,
                                }}
                            />
                        </Link>
                        </SplideSlide>
                    )}
                </Splide>
            </div>
            </div>
        </div>
    )
}