interface UsersInfos{
    email: string
    password: string
}
export async function createUser({email, password }: UsersInfos){
   const response = await fetch('https://ecoapi-hyjk.onrender.com/users',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Erro: ${errorData.message || 'Erro ao criar usuário'}`);
    }
      return await response.json();
   
}