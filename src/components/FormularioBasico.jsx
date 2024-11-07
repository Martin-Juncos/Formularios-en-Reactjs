import { useState } from "react";
import { Link } from "react-router-dom";

function validate({ email }) {
  const error = {};
  if (email && !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)) {
    error.email = "El formato debe de ser de email";
  }
  return error;
}

export default function FormularioBasico() {
  const [error, setError] = useState({});
  // const handleBlur = (e) => {
  //   const clave = e.target.name;
  //   const valor = e.target.value;
  //   setError(
  //     validate({
  //       ...input,
  //       [clave]: valor,
  //     })
  //   );
  // };

  const [input, setInput] = useState({
    nombre: "",
    email: "",
    rango: 0,
    fecha: "",
    seleccionar: "",
  });

  const handleInput = (e) => {
    const clave = e.target.name;
    const valor = e.target.value;
    setInput({
      ...input,
      [clave]: valor,
    });
    setError(
      validate({
        ...input,
        [clave]: valor,
      })
    );
  };

  const [radio, setRadio] = useState("");
  const handleChange = (e) => {
    setRadio(e.target.value);
  };

  const [checkboxes, setCheckboxes] = useState({
    A: false,
    B: false,
    C: false,
  });
  const handleCheck = (e) => {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input, radio, checkboxes);
  };
  return (
    <>
      <Link to="/">Volver</Link>
      <h2>Formulario Basico</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="nombre"
          name="nombre"
          value={input.nombre}
          onChange={handleInput}
          type="text"
          placeholder="nombre"
        />
        <br />
        <input
          id="email"
          name="email"
          value={input.email}
          type="email"
          placeholder="email"
          onChange={handleInput}
          // onBlur={handleBlur}
        />
        {error.email && <span>{error.email}</span>}

        <br />
        <label htmlFor="rango">rango: </label>
        <input
          type="range"
          id="rango"
          name="rango"
          value={input.rango}
          onChange={handleInput}
        />
        <br />

        <input
          type="radio"
          id="uno"
          name="opcion"
          value="uno"
          onChange={handleChange}
          checked={radio === "uno"}
        />
        <label htmlFor="uno">Uno</label>

        <input
          type="radio"
          id="dos"
          name="opcion"
          value="dos"
          onChange={handleChange}
          checked={radio === "dos"}
        />
        <label htmlFor="dos">Dos</label>

        <input
          type="radio"
          id="tres"
          name="opcion"
          value="tres"
          onChange={handleChange}
          checked={radio === "tres"}
        />
        <label htmlFor="tres">Tres</label>
        <br />

        <input
          type="checkbox"
          id="A"
          name="A"
          checked={checkboxes.A}
          onChange={handleCheck}
        />
        <label htmlFor="A">A</label>
        <input
          type="checkbox"
          id="B"
          name="B"
          checked={checkboxes.B}
          onChange={handleCheck}
        />
        <label htmlFor="B">B</label>
        <input
          type="checkbox"
          id="C"
          name="C"
          checked={checkboxes.C}
          onChange={handleCheck}
        />
        <label htmlFor="C">C</label>
        <br />
        <label htmlFor="fecha">Fecha: </label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={input.fecha}
          onChange={handleInput}
        />
        <br />
        <label>
          Seleccionar:
          <select
            name="seleccionar"
            value={input.seleccionar}
            onChange={handleInput}
          >
            <option value="">---</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </label>

        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
