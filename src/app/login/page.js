'use client'
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import Image from 'next/image';
import { useState } from 'react';
import { redirect } from 'next/navigation'
import { create } from '@/actions/login';

export default function Cadastro() {

  const [mensagem, setMensagem] = useState(''); 

   async function handleSubmit(formData){
    const resp = await create(formData)
    if(resp.error){
      setMensagem(resp.error)
      return
    }
    setMensagem("login efetuado")
    redirect("/inicial")
  }

  return (
    <main>
      <form action={handleSubmit}>
        <div className='flex justify-center mt-2'>
          <Image src="/LOGOSEU.png" alt="canteiro" width={268} height={109} />
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-lime-400 text-lg my-6'>Login</h2>
          <TextInput
            name="email"
            id="email"
            label="Seu email"
            placeholder="exemplo@exemplo.com"
          />
          <TextInput
            name="senha"
            id="senha"
            label="Sua senha"
            type="password"
            placeholder="********"
          />
        </div>

        <div className='flex justify-center'>
          <div className='pt-20 w-48 flex justify-around'>
            <Button variant='secondary' href="/">Voltar</Button>
            <Button type="submit" href="/inicial">Entrar</Button>
          </div>
        </div>
      </form>
    </main>
  );
}
