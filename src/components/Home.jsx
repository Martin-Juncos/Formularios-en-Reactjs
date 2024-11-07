import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Home</h2>
      <Link to="/formulario-basico">
        <button>Formulario Basico</button>
      </Link>

      <Link to="/hook-form">
        <button>Hook Form</button>
      </Link>
    </>
  );
}

export default Home;
