'use server'

import { revalidatePath } from "next/cache"

export async function create(formData) {

      const login = {
        email:formData.get('email') ,
        senha:formData.get('senha'),
      }
    
      console.log(formData)

    const url = "http://localhost:8080/api/v1/login"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login })    
    }
     const resp = await fetch(url, options)
     if (resp.status!==200){
        return {error:"erro ao logar"}
     }
     revalidatePath("/inicial")
return  {ok:"login efetuado"}

}