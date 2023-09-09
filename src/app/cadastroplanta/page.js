'use client'
import Button from '@/components/Button';
import NavBar from '@/components/NavBar';
import TextInput from '@/components/TextInput';
import Image from 'next/image';
import { useState } from 'react';

export default function CadastroPlanta() {
  const [selectedOption, setSelectedOption] = useState('');
  const [NomeCientifico, setNomeCientifico] = useState('');
  const [Frequencia, setFrequencia] = useState('');
  const [Apelido, setApelido] = useState(''); // Adicionado estado para Apelido
  const [Quantidade, setQuantidade] = useState(''); // Adicionado estado para Quantidade
  const [data, setData] = useState('');


  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/seu-endpoint-de-envio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          NomeCientifico,
          Frequencia,
          Apelido, // Incluído Apelido nos dados a serem enviados
          Quantidade, // Incluído Quantidade nos dados a serem enviados
          data,
          PlantaSelecionada: selectedOption,
        }),
      });

      if (response.ok) {
        // Lida com uma resposta bem-sucedida (por exemplo, redirecionamento ou exibição de uma mensagem de sucesso)
        console.log('Dados enviados com sucesso!');
      } else {
        // Lida com erros de resposta (por exemplo, exibição de mensagem de erro)
        console.error('Erro ao enviar dados');
      }
    } catch (error) {
      // Lida com erros durante a solicitação (por exemplo, erro de rede)
      console.error('Erro na solicitação:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className='flex flex-col mt-8 items-center'>
        <h2 className=' text-lime-400 text-lg mb-6'>Cadastro de Sementes</h2>
        <label htmlFor="selectField" className='text-lime-200 font-semibold '>Nome da Planta</label>
        <select
          className='text-black bg-lime-200 w-64 h-5 rounded outline-none'
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
        <TextInput name="NomeCientifico" id="NomeCientifico" label="Nome Cientifico" value={NomeCientifico} onChange={(e) => setNomeCientifico(e.target.value)} />
        <TextInput name="Frequencia" id="Frequencia" label="Frequencia Irrigação" value={Frequencia} onChange={(e) => setFrequencia(e.target.value)} />
        <TextInput name="Apelido" id="Apelido" label="Apelido Planta" value={Apelido} onChange={(e) => setApelido(e.target.value)} />
        <TextInput name="Quantidade" id="Quantidade" label="Quantidade" value={Quantidade} onChange={(e) => setQuantidade(e.target.value)} />
        <TextInput name="data" id="data" label="data" value={data} onChange={(e) => setData(e.target.value)} />
        
        <div className="flex justify-center">
        <div className='pt-20 w-48 flex justify-around'>
          <Button href="/" variant="secondary">Cancelar</Button>
          <Button onClick={handleSubmit}>Salvar</Button>
        </div>
        </div>
      </div>
    </>
  );
}
