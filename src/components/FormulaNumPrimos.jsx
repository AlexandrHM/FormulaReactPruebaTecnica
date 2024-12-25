import React, { useState } from "react";
import "./Card.css"; // Estilos compartidos

const FormulaNumPrimo = () => {
  const [n, setN] = useState("");
  const [resultado, setResultado] = useState(null);

  // Función para verificar si un número es primo
  const esPrimo = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Función para encontrar el enésimo número primo
  const calcularPrimo = () => {
    const numero = parseInt(n, 10);

    if (isNaN(numero) || numero < 1) {
      setResultado("Por favor, introduce un número entero positivo válido.");
      return;
    }

    let contador = 0; // Contador de números primos encontrados
    let valorActual = 1; // Número a evaluar si es primo
    while (contador < numero) {
      valorActual++;
      if (esPrimo(valorActual)) {
        contador++;
      }
    }

    setResultado(`El número primo número ${numero} es ${valorActual}.`);
  };

  return (
    <div className="card">
      <img src="/src/assets/img3.png" alt="Fórmula Número Primo" className="formula-img" />
      <p>Un número primo es aquel que solo se puede dividir exactamente entre 1 y él mismo.</p>
      <input
        type="number"
        placeholder="Introduce n"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <button onClick={calcularPrimo}>Calcular</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default FormulaNumPrimo;
