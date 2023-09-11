import Button from '@/components/Button';
import Image from 'next/image';

export default function Inicial() {
  return (
    <>
      <div className='flex justify-center mt-2'>
        <Image src="/LOGOSEU.png" alt="canteiro" width={268} height={109} />
      </div>

      <div className='flex justify-center'>
        <div className='pt-20 w-48 flex justify-around'>
          <Button element='link' href="/cadastro">Cadastro</Button>
          <Button element='link' href="/login">Login</Button>
        </div>
      </div>

      <div className='relative' style={{ minHeight: 'calc(100vh - 109px - 20px - 100px)' }}>
        <div className='absolute bottom-0 left-0 w-full'>
          <Image src="/arv.png" alt="canteiro" layout="responsive" width={1323} height={387} />
        </div>
      </div>
    </>
  );
}
