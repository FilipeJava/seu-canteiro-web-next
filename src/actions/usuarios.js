'use server'

import { revalidatePath } from "next/cache"

export async function create(formData) {

    const usuario = {
        nome:formData.get('nome'),
        cpf:formData.get('cpf'),
        dataNascimento:formData.get('dataNascimento'),
        telefone:formData.get('telefone')
      };
      const login = {
        email:formData.get('email') ,
        senha:formData.get('senha'),
      }
    
      console.log(formData)

    const url = "http://localhost:8080/api/v1/usuario"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, login })    
    }
     const resp = await fetch(url, options)
     if (resp.status!==201){
        return {error:"erro ao cadastrar"}
     }
     revalidatePath("/login")
return  {ok:"cadastro de usuário efetuado"}

}