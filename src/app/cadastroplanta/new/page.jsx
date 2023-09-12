'use client'
import Button from '@/components/Button';
import NavBar from '@/components/NavBar';
import TextInput from '@/components/TextInput';
import { useState } from 'react';
import { redirect } from 'next/navigation'
import { create } from '@/actions/plantas';

export default function CadastroPlanta() {

  const [mensagem, setMensagem] = useState(''); 

   async function handleSubmit(formData){
    const resp = await create(formData)
    if(resp.error){
      setMensagem(resp.error)
      return
    }
    setMensagem("planta cadastrada")
    redirect("/cadastroplanta")
  }

  return (
    <>
      <NavBar />
      <main className='flex flex-col mt-8 items-center'>
        <h2 className=' text-lime-400 text-lg mb-6'>Cadastro de Sementes</h2>
        <form action={handleSubmit} className='flex flex-col'>
          <TextInput name="nome" id="nome" label="Nome da Planta"  />
          <TextInput name="nomeCientifico" id="nomeCientifico" label="Nome Científico" />
          <TextInput name="regacao" id="regacao" label="Frequencia de Irrigação" />
          <TextInput name="apelido" id="apelido" label="Apelido da Planta"/>
          <TextInput name="quantidadePlantada" id="quantidadePlantada" label="Quantidade Plantada"/>
          <TextInput name="dataPlantio" id="dataPlantio" label="Data do Plantio"  />
          <TextInput name="dataColheita" id="dataColheita" label="Data da Colheita"  />
          
          <div className="flex justify-center">
            <div className='pt-20 w-48 flex justify-around'>
              <Button href="/inicial" variant="secondary">Cancelar</Button>
              <Button element='botao'>Salvar</Button>
            </div>
          </div>
          <p>{mensagem}</p>
        </form>
      </main>
    </>
  );
}
