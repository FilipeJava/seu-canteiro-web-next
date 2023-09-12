import NavBar from '@/components/NavBar';
import PlantaRow from './PlantaRow'
import Button from '@/components/Button';
import { getPlantas } from "@/actions/plantas";

export default async function Plantas()  {
  const data = await getPlantas()
 
  return (
    <>
        <NavBar/>
        <main className='bg-lime-200 m-10 p-8'>
            <div className='flex justify-between'>
                <h2 className='text-lime-800 text-xl'>Canteiro</h2>
                <h3 className='text-lime-600 text-xl'>Nome da Planta</h3>
                <h3 className='text-lime-600 text-xl'>Nome Científico</h3>
                <h3 className='text-lime-600 text-xl'>Frequência de Irrigação</h3>
                <h3 className='text-lime-600 text-xl'>Apelido da Planta</h3>
                <h3 className='text-lime-600 text-xl'>Quantidade</h3>
                <h3 className='text-lime-600 text-xl'>Data do Plantio</h3>
                <Button element='link' href='/cadastroplanta/new'>Adicionar Planta</Button>
            </div>
            <div>
                <div id='data' className='text-slate-300' >
                {data.map(planta =>{
                    console.log(data)
                    return <PlantaRow planta={planta}/>
                })}
                </div>
            </div> 
        </main>
    </>
  )
};