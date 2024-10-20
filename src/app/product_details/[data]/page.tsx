"use client";

import { CreatedProductForm } from "@/app/configVendedor/componentes/form_produto/formProduct";
import Header from "@/app/TelaPrincipal/componentesPrincipal/header/Header";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductDatailsProps {
  params: {
    data: CreatedProductForm;
  };
}

export default function ProductDetails({ params }: ProductDatailsProps) {
  const { data } = params;
  console.log(data);
  const searchParams = useSearchParams();
  const productData = searchParams.get("productData");
  const [product, setProduct] = useState<CreatedProductForm | null>(null);

  useEffect(() => {
    if (productData) {
      const decodedProduct = JSON.parse(decodeURIComponent(productData));
      setProduct(decodedProduct);
    }
  }, [productData]);

  return (
    <div className="product-details-container w-screen mx-auto ">
      <Header />

      <div className="top-section flex flex-col lg:flex-row">
        <div className="product-image w-full lg:w-1/2">
          <img
            src="/horse.jpg"
            alt="Roupa de frio"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="product-info w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
          <p className="text-gray-500 mb-4">
            Categoria: {product?.category_id}
          </p>
          <p className="text-xl font-semibold text-sky-950 mb-4">
            R${product?.price}
          </p>
          <p className="text-gray-700 mb-4">{product?.description}</p>
        </div>
        <div className="bottom-section mt-8 text-gray-600">
          <p>Product ID: 1</p>
          <p>Store ID: 3</p>
          <p>Created at: 10/03/2024</p>
          <p>Updated at: 10/03/2024</p>
        </div>
      </div>
      <div className="middle-section mt-8">
        <div className="flex items-center space-x-4">
          <p className="text-lg">Available Quantity: 5</p>
          <input
            type="number"
            min="1"
            max={5}
            defaultValue={1}
            className="border px-4 py-2 rounded-lg w-24"
          />
          <button className="bg-sky-950 text-white px-6 py-2 rounded-lg">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
