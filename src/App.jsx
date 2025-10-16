import { useState } from "react";
import "./App.css";   //?importa o css que é 100% responsavel pela pagina
import ImgRestaurante from "./assets/hashtaurante.webp"; //? importa a imagem do resataurante que fica no banner
import Cards from "./components/Cards";   //? importa o componemte cards que contem a estrutura basica dos cards
import Navegacao from "./components/Navegacao";   //? é responsavel por importar o componente de navegação da pagina

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  return (
    <>
      <div className="container">
        <div className="banner">
          <img src={ImgRestaurante} alt="Imagem do Hashtaurante" />
        </div>

        <Navegacao
          categoriaSelecionada={categoriaSelecionada}
          setCategoriaSelecionada={setCategoriaSelecionada}
        />

        <Cards categoriaSelecionada={categoriaSelecionada} />
      </div>
    </>
  );
}

export default App;
