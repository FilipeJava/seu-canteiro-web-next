import BasicMenu from '@/components/BasicMenu';


export default function PlantaRow ({planta}){
    return(
        <div id='data-row'  >
            <div className="h-6 w-6" />
              <span>{planta.nome}</span>
              {/* <span>{planta.nomeCientifico}</span>
              <span>{planta.regacao}</span>
              <span>{planta.apelido}</span>
              <span>{planta.quantidadePlantada}</span>
              <span>{planta.dataPlantio}</span>
              <span>{planta.dataColheita}</span> */}
              <BasicMenu/>
            </div>      
    );
}