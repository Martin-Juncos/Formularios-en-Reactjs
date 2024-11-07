import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ValidatEdad = (value) => {
  return value >= 18;
};

const FormularioHook = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    watch,
  } = useForm();
  console.log(errors);

  const incluirTelefono = watch("incluirTelefono");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Link to="/">Volver</Link>
      <h2>Formulario Hook</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            {...register("nombre", { required: true, maxLength: 10 })}
          />
          {errors.nombre?.type === "maxLength" && (
            <p>Debe tener maximo 10 caracteres</p>
          )}
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
            })}
          />
          {errors.email?.type === "pattern" && <p>No tiene formato de email</p>}
        </div>

        <div>
          <label>Confirmar correo</label>
          <input
            type="text"
            {...register("confirmar", {
              validate: (value) => value === getValues("email"),
            })}
          />
          {errors.confirmar && <p>El correo no es el mismo</p>}
        </div>

        <div>
          <label>Edad</label>
          <input type="text" {...register("edad", { validate: ValidatEdad })} />
          {errors.edad && <p>Debe ser mayor de edad</p>}
        </div>

        <div>
          <label>País</label>
          <select {...register("pais")}>
            <option value="argentina">argentina</option>
            <option value="brasil">brasil</option>
            <option value="uruguay">uruguay</option>
          </select>
        </div>

        <div>
          <label>¿Incluir teléfono?</label>
          <input type="checkbox" {...register("incluirTelefono")} />
          {incluirTelefono && (
            <>
              <br />
              <label>telefono</label>
              <input type="text" {...register("telefono")} />
            </>
          )}
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormularioHook;
