
import { useState } from "react";

const ManegeData = () => {
  let someData = 10;

  console.log(someData);

  const [number, setNumber] = useState();
  return (
    <div>
      <div>
        <p>Valor: {someData} </p>
        <button onClick={() => (someData = 15)}>Mudar variavel</button>
        <p>valor:{number} </p>
        <button onClick={() => setNumber(25)}>Mudar o state </button>
      </div>
    </div>
  );
};

export default ManegeData