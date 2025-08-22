import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./css/global.css";
import "./css/style.css";

function App() {
  // hoot - useState - manipula o estado da variavel

  const { peso, setPeso } = useState(0);
  const { altura, setAltura } = useState(0);
  const { resultado, setResultado } = useState(0);
  const { mostrarresultado, setMostrarResultado } = useState(0);

  // função calcular imc

  const calcularIMC = () => {
    const imc = peso / (altura * altura);
    return setResultado(imc.toFixed(2));
  };

  useEffect(() => {
    resultado > 0 ? setMostrarResultado(true) : setMostrarResultado(false);
  }, [resultado]);

  // fragment
  return (
    <div className="container">
      <div className="box">
        <Header />
        <form>
          <div>
            <label htmlFor="altura">
              <span className="span">(exemplo: 1.80) </span>
            </label>
            <input
              type="number"
              id="altura"
              placeholder="Digite sua Altura"
              onBlur={({ target }) => setAltura(parseFloat(target.value))}
            />
          </div>
          <div>
            <label htmlFor="peso">
              <span className="span">(exemplo: 80) </span>
            </label>
            <input
              type="number"
              id="peso"
              placeholder="Digite seu Peso"
              onBlur={({ target }) => setPeso(parseFloat(target.value))}
            />
          </div>

          <button onClick={calcularIMC}>Calcular</button>
        </form>
      </div>

      {mostrarResultado && <Resultado resultado={resultado} />}
    </div>
  );
}

export default App;
