import React, { useState } from "react";
import "./Card.css"; 

const FormulaFibonacci = () => {
  const [n, setN] = useState("");
  const [resultado, setResultado] = useState(null);
  
  const calcularFibonacci = () => {
    const numero = parseInt(n, 10);

    if (isNaN(numero) || numero < 0) {
      setResultado("Por favor, introduce un número entero positivo válido.");
      return;
    }

    const fibonacci = (n) => {
      const fib = [0, 1];
      for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
      }
      return fib[n];
    };

    const resultadoFibonacci = fibonacci(numero);
    setResultado(`El resultado de la secuencia de Fibonacci para ${numero} es ${resultadoFibonacci}.`);
  };

  return (
    <div className="card">
      <img src="src/assets/img2.png" alt="Fórmula Fibonacci" className="formula-img" />
      <p>La sucesión de Fibonacci es una secuencia donde cada número es la suma de los dos anteriores,
      comenzando con 0 y 1.</p>
      <input
        type="number"
        placeholder="Introduce n"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <button onClick={calcularFibonacci}>Calcular</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default FormulaFibonacci;
