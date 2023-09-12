'use client'
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import Image from 'next/image';
import { useState } from 'react';
import { redirect } from 'next/navigation'
import { create } from '@/actions/usuarios';

export default function Cadastro() {

  const [mensagem, setMensagem] = useState(''); 

  async function handleSubmit(formData){
   const resp = await create(formData)
   if(resp.error){
     setMensagem(resp.error)
     return
   }
   setMensagem("usuário cadastrado")
   redirect("/login")
 }

  return (
    <main>
      <form action={handleSubmit}>
        <div className='flex justify-center mt-2'>
          <Image src="/LOGOSEU.png" alt="canteiro" width={268} height={109} />
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-lime-400 font-semibold text-lg my-6'>CADASTRO</h2>
          <TextInput
            name="nome"
            id="nome"
            label="Nome Completo"
            placeholder="Digite seu nome completo"
          />
          <TextInput
            name="cpf"
            id="cpf"
            label="CPF"
            placeholder="Digite seu CPF"
          />
          <TextInput
            name="dataNascimento"
            id="dataNascimento"
            label="Data de Nascimento"
            placeholder="Digite a data no formato yyyy-MM-dd"
          />
          <TextInput
            name="telefone"
            id="telefone"
            label="Telefone"
            placeholder="Digite seu telefone"
          />
          <TextInput
            name="email"
            id="email"
            label="Email "
            placeholder="Digite seu email"
          />
          <TextInput
            name="senha"
            id="senha"
            label="Senha"
            type="password"
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
            <Button variant='secondary' href="/">Voltar</Button>
            <Button element='botao'>Salvar</Button>
          </div>
          <p>{mensagem}</p>
        </div>
      </form>
    </main>
  );
}
