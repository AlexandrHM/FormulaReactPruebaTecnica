import React, { useState } from "react";
import "./Card.css";
import LogicAlgoritm from "./LogicAlgoritm"; //Path de logica de formula general

const FormulaGeneral = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = parseInt(inputValue, 10);
    if (n && n >= 2) {
      try {
        const res = LogicAlgoritm.calcularFormula(n); // Llama al método calcularSerie
        setResultado(res); // Guarda el resultado en el estado
      } catch (error) {
        alert(error.message); // Manejo de errores si ocurre
      }
    } else {
      alert("Por favor, introduce un número mayor o igual a 2.");
    }
  };

  return (
    <div className="card">
      {/*<img src="/src/assets/img4.png" alt="Fórmula General" className="formula-img" />*/}
      <p>Esta fórmula une los tres algoritmos antes mencionados.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          min="2"
        />
        <button type="submit">Calcular</button>
      </form>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
};

export default FormulaGeneral;
