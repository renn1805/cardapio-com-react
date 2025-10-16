//? pagina responsavel pela navegação do site que usa mudança de estados, sendo que cada estado é uma posição do array de categorias e para cada uma das categorias aparecem os cards respectivos
const Navegacao = ({ setCategoriaSelecionada, categoriaSelecionada }) => {
  const categorias = ["Pratos Principais", "Sobremesas", "Bebidas"];

  return (
    <div className="categorias">
      {categorias.map((categoria, index) => (
        <p
          onClick={() => setCategoriaSelecionada(index)}
          key={index}
          className={`categoria${
            index === categoriaSelecionada ? " categoria--selecionada" : ""
          }`}
        >
          {categoria}
        </p>
      ))}
    </div>
  );
};

export default Navegacao;
