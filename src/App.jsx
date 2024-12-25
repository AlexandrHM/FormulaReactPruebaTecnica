import { useState } from 'react'
import './App.css'
import FormulaGeneral from './components/FormulaGeneral';
import FormulaTriangular from './components/formulaTriangular';
import FormulaFibonacci from './components/FormulaFibonacci';
import FormulaNumPrimo from './components/FormulaNumPrimos';


const App = () => {
  return (
    <div className="app">
      <h1>Algoritmos</h1>
      <div className="cards-container">
        <FormulaTriangular />
        <FormulaFibonacci />
        <FormulaNumPrimo />
        <FormulaGeneral />
      </div>
    </div>
  );
};

export default App;