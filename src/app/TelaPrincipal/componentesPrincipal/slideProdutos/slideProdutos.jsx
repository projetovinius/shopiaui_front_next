import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import useGetProductsQuery from '@/hooks/queries/useGetProductsQuery';

export default function SlideProdutos() {
    const { token } = useContext(AuthContext);
    const { data=[] } = useGetProductsQuery(token);

    return (
        <div>
            <div>
                <p className="font-bold text-center text-[20px] mb-9">Principais Destaques Para Você</p>
            </div>
            <div>
                <Splide
                    options={{
                        perPage: 5,
                        perMove: 1,
                        rewind: true,
                        pagination: false,
                        fixedWidth: 245,
                        gap: 10,
                        fixedHeight: 340
                    }}
                >
                    {data.map((post) => (
                        <SplideSlide key={post.id}>
                            {/* <Link href={
                                `/product_details/${post}`
                            }> */}
                                <div className="border rounded-lg shadow-md p-4">
                                    <img
                                        src={'https://radio93fm.com.br/wp-content/uploads/2019/02/produto-585x380.png'}
                                        alt={post.name}
                                        className="h-40 w-full object-cover rounded-md mb-2"
                                    />
                                    <h3 className="font-semibold text-lg">{post.name}</h3>
                                    <p className="text-gray-700">Preço: R${post.price}</p>
                                </div>
                            {/* </Link> */}
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}
