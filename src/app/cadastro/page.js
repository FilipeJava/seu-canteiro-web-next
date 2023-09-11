'use client'

import { useState } from 'react';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import Image from 'next/image';


export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    data: '',
    telefone: '',
    email:'',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/seu-endpoint-de-envio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso!');
      } else {
        console.error('Erro ao enviar dados');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-center mt-2'>
        <Image src="/LOGOSEU.png" alt="canteiro" width={268} height={109} />
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='text-lime-400 font-semibold text-lg my-6'>CADASTRO</h2>
        <TextInput
          name="nome"
          id="nome"
          label="Nome Completo"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite seu nome completo"
        />
        <TextInput
          name="cpf"
          id="cpf"
          label="CPF"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="Digite seu CPF"
        />
        <TextInput
          name="data"
          id="data"
          label="Data de Nascimento"
          value={formData.data}
          onChange={handleChange}
          placeholder="Digite a data no formato yyyy-MM-dd"
        />
        <TextInput
          name="telefone"
          id="telefone"
          label="Telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="Digite seu telefone"
        />
         <TextInput
          name="email"
          id="email"
          label="Email "
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu email"
        />
        <TextInput
          name="senha"
          id="senha"
          label="Senha"
          type="password"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Digite sua senha"
        />
        <TextInput
          name="rsenha"
          id="rsenha"
          label="Repita a Senha"
          type="password"
          placeholder="Digite sua senha novamente"
        
        />
      </div>

      <div className='flex justify-center'>
        <div className='pt-20 w-48 flex justify-around'>
          <Button element='link' variant='secondary' href="/">Voltar</Button>
          <Button type="submit">Salvar</Button>
        </div>
      </div>
    </form>
  );
}
