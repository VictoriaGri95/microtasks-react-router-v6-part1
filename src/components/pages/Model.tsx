import { useParams } from "react-router-dom";
import { adidasArr } from "./Adidas.tsx";

export const Model = () => {
  const params = useParams();

  // Преобразуем id в число
  const id = Number(params.id);

  // Проверяем, что id - число и существует в массиве
  if (isNaN(id) || id < 0 || id >= adidasArr.length) {
    return <div>Модель не найдена</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <h2>{adidasArr[id].model}</h2>
      <p>{adidasArr[id].collection}</p>
      <span>{adidasArr[id].price}</span>
      <img src={adidasArr[id].picture} alt={adidasArr[id].model}  style={{maxWidth: '600px', height: 'auto'}}/>
    </div>
  );
};