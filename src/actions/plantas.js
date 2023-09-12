'use server'





export async function create(formData) {

    const {nome, regacao, nomeCientifico, apelido, quantidadePlantada, dataPlantio, dataColheita } = formData;

    const planta = {
        nome,
        regacao,
        nomeCientifico,
        apelido
      };
      const plantio = {
        quantidadePlantada,
        dataPlantio,
        dataColheita
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
     if (resp.status!==201){
        return {error:"erro ao cadastrar"}
     }
return  {ok:"cadastro de planta efetuado"}

}