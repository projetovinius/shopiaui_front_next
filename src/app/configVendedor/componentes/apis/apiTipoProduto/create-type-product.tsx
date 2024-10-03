interface TypeProduct{
    name:string,
    description:string
}

export default async function createTypeProduct({name,description}: TypeProduct){
    const response = await fetch('https://ecoapi-hyjk.onrender.com/categories',{
        method:'PHOST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            description,
          }),
    })
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Erro: ${errorData.message || 'Erro ao criar tipo de produto'}`);
      }
        return await response.json();
}