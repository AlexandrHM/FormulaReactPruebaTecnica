// components/FormulaTriangular.jsx
import React, { useState } from "react";
import "./Card.css"; // Estilos compartidos

const FormulaTriangular = () => {
  const [n, setN] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularTriangular = () => {
    const num = parseInt(n, 10);
    if (isNaN(num) || num <= 0) {
      setResultado("Por favor, introduce un número válido.");
      return;
    }
    const resultadoTriangular = (num * (num + 1)) / 2; // Fórmula del número triangular
    setResultado(resultadoTriangular);
  };

  return (
    <div className="card">
      <img src="src/assets/img1.png" alt="Fórmula Triangular" className="formula-img" />
      <p>Un número triangular se obtiene al sumar los primeros 'n' números naturales consecutivos.
        Se llama así porque, si los representas con puntos, forman un triángulo.</p>
      <input
        type="text"
        placeholder="Introduce (n) del triangular"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <button onClick={calcularTriangular}>Calcular</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
};

export default FormulaTriangular;
