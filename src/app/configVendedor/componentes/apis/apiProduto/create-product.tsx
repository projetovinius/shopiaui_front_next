interface Products{
    name:string,
    description: string,
    price: number,
    quantity:number
}
export async function createdProduct({name,description,price,quantity}: Products){
    const response = await fetch('https://ecoapi-hyjk.onrender.com/products',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            description,
            price,
            quantity
          }),
        })
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Erro: ${errorData.message || 'Erro ao criar produto'}`);
        }
          return await response.json();
       
}