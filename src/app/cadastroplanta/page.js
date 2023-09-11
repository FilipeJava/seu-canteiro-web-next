import NavBar from '@/components/NavBar';
import PlantaRow from './canteiro/PlantaRow';
import Button from '@/components/Button';

async function getPlantas(){
  const url = "http://localhost:8080/api/v1/canteiro/1"

  const response =  await fetch(url, {next:{revalidate :3600}})
  return response.json()
}

export default async function Plantas()  {

  const data = await getPlantas()

  return (
    <>
        <NavBar/>
        <main className='bg-slate-950 m-20 p-8'>
            <div className='flex justify-between'>
                <h2>Canteiro</h2>
                <Button href="cadastroplanta/new">Adicionar Planta</Button>
            </div> 
            <div>
                <div id='data' className='text-slate-300' >
                {data.map(planta =>{
                    return <PlantaRow planta={planta}/>
                })}
                </div>
            </div> 
        </main>
    </>
  )
};