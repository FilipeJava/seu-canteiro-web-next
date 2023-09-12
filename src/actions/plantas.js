'use server'





export async function create(formData) {

    // const {nome, regacao, nomeCientifico, apelido, quantidadePlantada, dataPlantio, dataColheita } = formData;

    const nome = formData.get('nome')

    console.log(nome)

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
return  {ok:"cadastro de planta efetuado"}

}