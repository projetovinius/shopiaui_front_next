// 'use client'

// import { CreatedProductForm } from "@/app/configVendedor/componentes/formProduto/post-produto";

// // import { useRouter } from "next/router";


// interface ProductDatailsProps {
//   params: {
//     data: CreatedProductForm
//   };
// }


// export default function ProductDetails({params}: ProductDatailsProps) {
//     // const { data } = params; 
//     // console.log(data)
//     return (
//         <div className="product-details-container max-w-5xl mx-auto p-6">
//   <div className="top-section flex flex-col lg:flex-row">
//     <div className="product-image w-full lg:w-1/2">
//       <img src="/horse.jpg" alt="Roupa de frio" className="rounded-lg shadow-md" />
//     </div>
    
//     <div className="product-info w-full lg:w-1/2 lg:pl-8">
//       <h1 className="text-3xl font-bold mb-2">Roupa de frio</h1>
//       <p className="text-gray-500 mb-4">Categoria: Roupa de Inverno</p>
//       <p className="text-xl font-semibold text-sky-950 mb-4">R$566.99</p>
//       <p className="text-gray-700 mb-4">Casaco de pele de rato albino</p>
//     </div>
//     <div className="bottom-section mt-8 text-gray-600">
//       <p>Product ID: 1</p>
//       <p>Store ID: 3</p>
//       <p>Created at: 10/03/2024</p>
//       <p>Updated at: 10/03/2024</p>
//     </div>
//   </div>
  
//   {/* Middle Section */}
//   <div className="middle-section mt-8">
//     <div className="flex items-center space-x-4">
//       <p className="text-lg">Available Quantity: 5</p>
//       <input 
//         type="number" 
//         min="1" 
//         max={5} 
//         defaultValue={1} 
//         className="border px-4 py-2 rounded-lg w-24"
//       />
//       <button className="bg-sky-950 text-white px-6 py-2 rounded-lg">Add to Cart</button>
//     </div>
//   </div>
  
//   {/* Bottom Section */}

// </div>

//     )
// }