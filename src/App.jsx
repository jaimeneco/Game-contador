import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [sol, setSol] = useState(1);
  const [luna, setLuna] = useState(1);

  // Cargar valores desde localStorage al iniciar
  useEffect(() => {
    const savedSol = localStorage.getItem("clicks_sol");
    const savedLuna = localStorage.getItem("clicks_luna");

    if (savedSol) setSol(Number(savedSol));
    if (savedLuna) setLuna(Number(savedLuna));
  }, []);

  const total = sol + luna;
  const porcentajeSol = (sol / total) * 100;
  const porcentajeLuna = (luna / total) * 100;

  const handleClickSol = () => {
    const nuevoSol = sol + 1;
    setSol(nuevoSol);
    localStorage.setItem("clicks_sol", nuevoSol);
  };

  const handleClickLuna = () => {
    const nuevoLuna = luna + 1;
    setLuna(nuevoLuna);
    localStorage.setItem("clicks_luna", nuevoLuna);
  };

  return (
    <>
    <div className="Container">
      <h1 className="Container-titulo">¿Qué prefieres?</h1>
      <div className="Cards">
        <div className="Card-sol">
          <h2>Sol ☀️ </h2>
          <button onClick={handleClickSol}>Me gusta el sol</button>
          <p>Votos: {sol}</p>
        </div>
        <div className="Card-luna">
          <h2>Luna 🌙</h2>
          <button onClick={handleClickLuna}>Me gusta la luna</button>
          <p>Votos: {luna}</p>
        </div>
      </div>
      <div className="Barra-container">
        <div className="Barra-sol" style={{ width: `${porcentajeSol}%` }}>
          ☀️ {Math.round(porcentajeSol)}%
        </div>
        <div className="Barra-luna" style={{ width: `${porcentajeLuna}%` }}>
          🌙 {Math.round(porcentajeLuna)}%
        </div>
      </div>
      <p className="Total-clicks">Total de clicks: {total}</p>
    </div>
  </>
  );
}

export default App;
