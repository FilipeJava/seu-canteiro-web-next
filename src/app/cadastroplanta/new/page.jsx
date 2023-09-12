'use client'
import Button from '@/components/Button';
import NavBar from '@/components/NavBar';
import TextInput from '@/components/TextInput';
import { useState } from 'react';
import { redirect } from 'next/navigation'
import { create } from '@/actions/plantas';



export default function CadastroPlanta() {

  const [selectedOption, setSelectedOption] = useState('');
  const [nomeCientifico, setNomeCientifico] = useState('');
  const [regacao, setRegacao] = useState('');
  const [apelido, setApelido] = useState('');
  const [quantidadePlantada, setQuantidadePlantada] = useState(''); 
  const [dataPlantio, setDataPlantio] = useState('');
  const [dataColheita, setDataColheita] = useState('');
  const [messagem,setMenssagem] = useState(''); 




   async function handleSubmit(formData){
    const resp = await create(formData)
    if(resp.error){
      setMenssagem(resp.error)
      return
    }
    setMenssagem("planta cadastrada")
  }


  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };



 

  return (
    <>
      <NavBar />
      <main className='flex flex-col mt-8 items-center'>
        <h2 className=' text-lime-400 text-lg mb-6'>Cadastro de Sementes</h2>
        <form action={handleSubmit}>
        <label htmlFor="selectField" className='text-black-200 font-semibold'>Nome da Planta</label>
        <select
          className='text-black bg-lime-200 w-96 h-8 rounded outline-none'
          id="selectField"
          name="selectField"
          value={selectedOption}
          onChange={handleChange}
        >
            <option value="">Selecione uma opção...</option>
            <option value="Alface" className='text-black'>Alface</option>
            <option value="Batata" className='text-black'>Batata</option>
            <option value="Beringela" className='text-black'>Berinjela</option>
            <option value="Cebola" className='text-black'>Cebola</option>
            <option value="Cenoura" className='text-black'>Cenoura</option>
            <option value="Coentro" className='text-black'>Coentro</option>
            <option value="Feião" className='text-black'>Feijão</option>
        </select>
        <TextInput name="nomeCientifico" id="nomeCientifico" label="Nome Científico" value={nomeCientifico} onChange={(e) => setNomeCientifico(e.target.value)} />
        <TextInput name="regacao" id="regacao" label="Frequencia de Irrigação" value={regacao} onChange={(e) => setRegacao(e.target.value)} />
        <TextInput name="apelido" id="apelido" label="Apelido da Planta" value={apelido} onChange={(e) => setApelido(e.target.value)} />
        <TextInput name="quantidadePlantada" id="quantidadePlantada" label="Quantidade" value={quantidadePlantada} onChange={(e) => setQuantidadePlantada(e.target.value)} />
        <TextInput name="dataPlantio" id="dataPlantio" label="Data do Plantio" value={dataPlantio} onChange={(e) => setDataPlantio(e.target.value)} />
        <TextInput name="dataColheita" id="dataColheita" label="Data da Colheita" value={dataColheita} onChange={(e) => setDataColheita(e.target.value)} />
        
        <div className="flex justify-center">
        <div className='pt-20 w-48 flex justify-around'>
          <Button href="/inicial" variant="secondary">Cancelar</Button>
          <Button element='botao'>Salvar</Button>
        </div>
        
        </div>
        <p>{messagem}</p>
        </form>
      </main>
    </>
  );
}
