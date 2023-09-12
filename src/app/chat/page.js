import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import React from 'react';

export default function ChatPage() {
  return (
    <>
      <NavBar />
      <div className='flex flex-col items-center justify-center h-screen'>
        <header className='flex justify-center items-baseline gap-2 py-20'>
          <h2 className='text-lime-500'>ChatBot</h2>
        </header>
        <div className='flex items-center justify-center h-full w-full bg-lime-200'>
          <div className='chat-container'>
            <p>Diálogo aqui</p>
          </div>
        </div>
        <footer className='flex justify-center py-24'>
          <div className='flex items-center'>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className='p-2 border border-gray-300 rounded mr-2'
            />
            <Button
              element='link'
              href='/inicial'
              className='bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600'
            >
              Enviar Mensagem
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
}
