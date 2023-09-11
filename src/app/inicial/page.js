import Button from '@/components/Button'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className='flex flex-col'>
            <div className='flex justify-center items-baseline gap-2 py-20'>
                  <Image src="/cenoura.png" alt="canteiro" width={32} height={44} />
                  <h2 className='text-lime-400'>Home</h2>
            </div>

            <div className='flex justify-center'>
                       <p className='text-lime-400 text-xl'>Clique no botão e comece mudar o mundo.</p>
            </div>

            <div className='flex justify-center py-24'>
                      <Button element='link'  href='/cadastroplanta/new'>Vamos Plantar</Button>
            </div>
      </div>
    </>
  )
}
