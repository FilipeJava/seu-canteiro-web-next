import BasicMenu from '@/components/BasicMenu';

export default function PlantaRow ({planta}){
    return(
        <div id='data-row' className='flex justify-between hover:bg-lime-800 p-2 my-2 cursor-pointer rounded' >
            <div className="h-6 w-6" />
                <span className='text-lime-600 text-l'>{planta.planta.nome}</span>
                <span className='text-lime-600 text-l'>{planta.planta.nomeCientifico}</span>
                <span className='text-lime-600 text-l'>{planta.planta.regacao}</span>
                <span className='text-lime-600 text-l'>{planta.planta.apelido}</span>
                <span className='text-lime-600 text-l'>{planta.plantio.quantidadePlantada}</span>
                <span className='text-lime-600 text-l'>{planta.plantio.dataPlantio}</span>
                <BasicMenu/>
            </div>      
    );
}