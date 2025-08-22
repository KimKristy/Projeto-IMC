const TabelaIMC = (resultado) => {
  if (resultado < 18) {
    return (
      <>
        <td>Abaixo do peso</td>
        <td>Abaixo de 18</td>
      </>
    );
  } else if (resultado > 18 && resultado < 25) {
    return (
      <>
        <td>Peso normal</td>
        <td>18 - 25.9</td>
      </>
    );
  } else if (resultado > 24 && resultado < 30) {
    return (
      <>
        <td>Sobre peso</td>
        <td>25 - 29.9</td>
      </>
    );
  } else if (resultado > 29 && resultado < 35) {
    return (
      <>
        <td>Obesidade Grau I</td>
        <td>30 - 34.9</td>
      </>
    );
  } else {
    return (
      <>
        <td>Obesidade Mórbida</td>
        <td>Maior ou igual a 40</td>
      </>
    );
  }
};
export default TabelaIMC