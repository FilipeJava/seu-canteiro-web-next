import BasicMenu from '@/components/BasicMenu';


export default function PlantaRow ({planta}){
    return(
        <div id='data-row' className='flex justify-between hover:bg-slate-700 p-2 my-2 cursor-pointer rounded' >
            <div className="h-6 w-6" />
            <span>{planta.planta.nome}</span>
      <span>{planta.planta.nomeCientifico}</span>
      <span>{planta.plantio.regacao}</span>
      <span>{planta.plantio.apelido}</span>
      <span>{planta.plantio.quantidadePlantada}</span>
      <span>{planta.plantio.dataPlantio}</span>
      <span>{planta.plantio.dataColheita}</span>
              <BasicMenu/>
            </div>      
    );
}