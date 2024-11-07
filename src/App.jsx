import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import FormularioBasico from "./components/FormularioBasico";
import FormularioHook from "./components/FormularioHook";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario-basico" element={<FormularioBasico />} />
        <Route path="/hook-form" element={<FormularioHook />} />
      </Routes>
    </>
  );
}

export default App;
