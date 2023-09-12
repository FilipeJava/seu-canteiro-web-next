'use server'

import { revalidatePath } from "next/cache"

export async function create(formData) {

    const planta = {
        nome:formData.get('nome'),
        regacao:formData.get('regacao'),
        nomeCientifico:formData.get('nomeCientifico'),
        apelido:formData.get('apelido')
      };
      const plantio = {
        quantidadePlantada:formData.get('quantidadePlantada') ,
        dataPlantio:formData.get('dataPlantio'),
        dataColheita:formData.get('dataColheita') 
      }
    
      console.log(formData)

    const url = "http://localhost:8080/api/v1/planta/1"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planta, plantio })    
    }
     const resp = await fetch(url,options)
     if (resp.status!==200){
        return {error:"erro ao cadastrar"}
     }
     revalidatePath("/cadastroplanta")
return  {ok:"cadastro de planta efetuado"}

}

export async function getPlantas(){
  await new Promise(r => setTimeout(r, 5000));
  const response = await fetch("http://localhost:8080/api/v1/canteiro/1",  { next: { revalidate: 0 } })
  return response.json()
}