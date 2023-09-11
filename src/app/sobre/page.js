import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Sobre() {
  return (
    <>
        <NavBar />
        <div className='flex flex-col'>
            <div className='flex justify-center items-baseline gap-2 py-10'>
                <Image src="/cenoura.png" alt="canteiro" width={32} height={44} />
                <h2 className='text-lime-400 text-xl'>Sobre Nós</h2>
            </div>

            <div className='flex flex-col items-center gap-2 py-5'>
                <div className='w-11/12 max-w-screen-lg mx-auto'>
                    <p className='text-black-300 text-l'>
                        No Seu Canteiro, acreditamos que cada semente plantada é um ato de resistência contra a fome que assola nosso mundo. Somos uma equipe apaixonada
                        por promover a autossuficiência alimentar e criar um futuro sustentável para todos. Nossa jornada começou com a constatação de que o sistema 
                        alimentar global é falho e desigual. Bilhões de pessoas enfrentam a realidade triste e injusta da fome todos os dias. Movidos por empatia 
                        e determinação, decidimos agir. Desenvolvemos um aplicativo revolucionário que permite cultivar alimentos em qualquer espaço, seja em um pequeno
                        apartamento ou em uma casa com um jardim exuberante. Acreditamos que todos têm o direito de acessar alimentos frescos e saudáveis, independentemente 
                        de onde vivam ou de suas circunstâncias.
                    </p>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='flex justify-center items-baseline gap-2 py-10'>
                    <Image src="/cenoura.png" alt="canteiro" width={32} height={44} />
                    <h2 className='text-lime-400 text-xl'>Nossa Missão</h2>
                </div>
            </div>

            <div className='flex flex-col items-center gap-2 py-5'>
                <div className='w-11/12 max-w-screen-lg mx-auto'>
                    <p className='text-black-300 text-l'>
                        Nossa  missão  vai  além  de   informar  as ferramentas  necessárias  para  o  cultivo  de alimentos em casa. Estamos comprometidos em tocar 
                        a  alma  das  pessoas  e  despertar  a consciência coletiva sobre a fome e suas causas subjacentes.  Queremos  inspirar  uma  revolução silenciosa  
                        em  cada  lar,  onde  a  comida   seja cultivada  com  amor  e  apreciada  em sua forma mais pura.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}