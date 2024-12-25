import LogicAlgoritm from "../components/LogicAlgoritm";

describe("Pruebas de LogicAlgoritm", () => {
    // Pruebas para el método fibonacci
    test("fibonacci: Calcula correctamente los términos de Fibonacci", () => {
        expect(LogicAlgoritm.fibonacci(0)).toBe(0);
        expect(LogicAlgoritm.fibonacci(1)).toBe(1);
        expect(LogicAlgoritm.fibonacci(2)).toBe(1);
        expect(LogicAlgoritm.fibonacci(5)).toBe(5);
        expect(LogicAlgoritm.fibonacci(10)).toBe(55);
    });

    test("fibonacci: Devuelve 0 para valores negativos", () => {
        expect(LogicAlgoritm.fibonacci(-5)).toBe(0);
    });

    // Pruebas para el método esPrimo
    test("esPrimo: Identifica correctamente los números primos", () => {
        expect(LogicAlgoritm.esPrimo(2)).toBe(true);
        expect(LogicAlgoritm.esPrimo(3)).toBe(true);
        expect(LogicAlgoritm.esPrimo(4)).toBe(false);
        expect(LogicAlgoritm.esPrimo(17)).toBe(true);
        expect(LogicAlgoritm.esPrimo(18)).toBe(false);
    });

    test("esPrimo: Devuelve false para números menores a 2", () => {
        expect(LogicAlgoritm.esPrimo(0)).toBe(false);
        expect(LogicAlgoritm.esPrimo(1)).toBe(false);
        expect(LogicAlgoritm.esPrimo(-5)).toBe(false);
    });

    // Pruebas para el método primo
    test("primo: Calcula correctamente el n-ésimo número primo", () => {
        expect(LogicAlgoritm.primo(1)).toBe(2);  // El primer primo
        expect(LogicAlgoritm.primo(2)).toBe(3);  // El segundo primo
        expect(LogicAlgoritm.primo(5)).toBe(11); // El quinto primo
    });

    // Pruebas para el método triangular
    test("triangular: Calcula correctamente el número triangular", () => {
        expect(LogicAlgoritm.triangular(1)).toBe(1);  // Primer número triangular
        expect(LogicAlgoritm.triangular(3)).toBe(6);  // Tercer número triangular
        expect(LogicAlgoritm.triangular(5)).toBe(15); // Quinto número triangular
    });

    // Pruebas para el método calcularFormula
    test("calcularFormula: Manejo de errores para n = 1 y n = 2", () => {
        expect(() => LogicAlgoritm.calcularFormula(1)).toThrow(
            "n debe ser mayor o igual a 2 para que la serie sea válida."
        );
        expect(() => LogicAlgoritm.calcularFormula(2)).toThrow(
            "El término de Fibonacci es 0, división no válida."
        );
    });

    test("calcularFormula: Calcula correctamente la fórmula para n = 3 a n = 10", () => {
        const resultadosEsperados = [60, 140, 165, 182, 190.4, 171, 159.23, 151.90]; // Valores esperados para n = 3 a n = 10
        for (let i = 3; i <= 10; i++) {
            expect(LogicAlgoritm.calcularFormula(i)).toBeCloseTo(resultadosEsperados[i - 3], 2);
        }
    });
});
