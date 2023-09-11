import BasicMenu from '@/components/BasicMenu';


export default function PlantaRow ({planta}){
    return(
        <div id='data-row' className='flex justify-between hover:bg-slate-700 p-2 my-2 cursor-pointer rounded' >
            <div className="h-6 w-6" />
              <span>{planta.nomePlanta}</span>
              <span>{planta.nomeCientifico}</span>
              <span>{planta.regacao}</span>
              <span>{planta.apelido}</span>
              <span>{planta.quantidadePlantada}</span>
              <span>{planta.dataPlantio}</span>
              <span>{planta.dataColheita}</span>
              <BasicMenu/>
            </div>      
    );
}