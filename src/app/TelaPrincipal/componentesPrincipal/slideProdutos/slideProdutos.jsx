import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import useGetProductsQuery from '@/hooks/queries/useGetProductsQuery';
import Link from 'next/link';

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
                    {data.map((product) => (
                        <SplideSlide key={product.id}>
                                <Link
                                    href={{
                                        pathname: `/product_details/${product.id}`,
                                        query: {
                                            productData: encodeURIComponent(JSON.stringify(product))
                                        }
                                    }}
                                >
                                    <div className="border rounded-lg shadow-md p-4">
                                        <img
                                            src={'https://radio93fm.com.br/wp-content/uploads/2019/02/produto-585x380.png'}
                                            alt={product.name}
                                            className="h-40 w-full object-cover rounded-md mb-2"
                                        />
                                        <h3 className="font-semibold text-lg">{product.name}</h3>
                                        <p className="text-gray-700">Preço: R${product.price}</p>
                                    </div>
                                </Link>
                            </SplideSlide>
                        ))}
                </Splide>
            </div>
        </div>
    );
}
