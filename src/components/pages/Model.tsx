import {useParams} from "react-router-dom";
import {adidasArr, AdidasItem} from "./Adidas.tsx";
import {pumaArr, PumaItem} from "./Puma.tsx";


type crossModels = {
  [key: string]: AdidasItem[] | PumaItem[];
}


const crossModels: crossModels = {
  adidas: adidasArr,
  puma: pumaArr,
}

export const Model = () => {

  const {model, id} = useParams();

  const currentModel = model
    ? crossModels[model].find(item => item.id === Number(id))
    : null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px"
      }}
    >
      {currentModel
        ?
        <>
          <h2>{currentModel.model}</h2>
          <p>{currentModel.collection}</p>
          <span>{currentModel.price}</span>
          <img
            src={currentModel.picture}
            alt={currentModel.model}
            style={{maxWidth: '600px', height: 'auto'}}
          />
        </>
        :
        <div>Такой модели не существует</div>
      }
    </div>
  );
};