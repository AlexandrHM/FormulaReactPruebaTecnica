
class LogicAlgoritm {
  // Método para calcular el n-ésimo término de Fibonacci
  static fibonacci(n) {
    if (n < 0) return 0; // Manejo de n negativo
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[n];
  }

  // Método para verificar si un número es primo
  static esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Método para encontrar el n-ésimo número primo
  static primo(n) {
    let contador = 0; // Contador de números primos encontrados
    let numero = 1;   // Número a evaluar si es primo
    while (contador < n) {
      numero++;
      if (this.esPrimo(numero)) {
        contador++;
      }
    }
    return numero;
  }

  // Método para calcular el número triangular de n
  static triangular(n) {
    return (n * (n + 1)) / 2;
  }

  // Método para calcular el término n de la serie
  static calcularFormula(n) {
    if (n < 2) {
      throw new Error("n debe ser mayor o igual a 2 para que la serie sea válida.");
    }
    const primo = this.primo(n);
    const triangular = this.triangular(n);
    const fibonacci = this.fibonacci(n - 2);

    if (fibonacci === 0) {
      throw new Error("El término de Fibonacci es 0, división no válida.");
    }

    return (2 * primo * triangular) / fibonacci;
  }
}

export default LogicAlgoritm;