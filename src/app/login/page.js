'use client'

import { useState } from 'react';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import Image from 'next/image';

export default function Cadastro() {
  const [formData, setFormData] = useState({
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
        <h2 className='text-lime-400 text-lg my-6'>Login</h2>
     
         <TextInput
          name="email"
          id="email"
          label="Seu email"
          value={formData.email}
          onChange={handleChange}
          placeholder="exemplo@exemplo.com"
        />
        <TextInput
          name="senha"
          id="senha"
          label="Sua senha"
          type="password"
          value={formData.senha}
          onChange={handleChange}
          placeholder="********"
        />
       
      </div>

      <div className='flex justify-center'>
        <div className='pt-20 w-48 flex justify-around'>
          <Button element='link' variant='secondary' href="/">Voltar</Button>
          <Button type="submit" href="/inicial">Entrar</Button>
        </div>
      </div>
    </form>
  );
}
