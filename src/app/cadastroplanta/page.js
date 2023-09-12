import NavBar from '@/components/NavBar';
import PlantaRow from './PlantaRow'
import Button from '@/components/Button';

async function getPlantas(){
  const url = "http://localhost:8080/api/v1/canteiro/1"
  const response =  await fetch(url, {next:{revalidate :0}})
  return response.json()
}

export default async function Plantas()  {
  const data = await getPlantas()
 
  return (
    <>
        <NavBar/>
        <main className='bg-lime-200 m-10 p-8'>
            <div className='flex justify-between'>
                <h3 className='text-lime-600 text-xl'>Canteiro</h3>
                <h3 className='text-lime-600 text-xl'>Nome da Planta</h3>
                <h3 className='text-lime-600 text-xl'>Nome Científico</h3>
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