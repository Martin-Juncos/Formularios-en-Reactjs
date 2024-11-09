# Formularios en React y React Hook Form

Este documento describe los conceptos clave y las mejores prácticas para trabajar con formularios en React, incluyendo componentes controlados y no controlados, así como la implementación de formularios eficientes y validaciones avanzadas con React Hook Form.

## Introducción a Formularios en React

Los formularios son una herramienta esencial en el desarrollo de interfaces, permitiendo a los usuarios interactuar con los datos. React facilita la creación de formularios dinámicos y reactivos usando su sistema de componentes y estado. Existen dos tipos de componentes para gestionar los valores de los formularios: **controlados** y **no controlados**.

## Componentes Controlados y No Controlados

### Componentes Controlados

En los componentes controlados, el estado de React maneja el valor de cada campo. Esto permite un control completo sobre los datos ingresados y facilita la validación en tiempo real.

**Ejemplo:**

```jsx
const [inputValue, setInputValue] = useState("");
<input
  type="text"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
/>;
```

### Componentes No Controlados

Los componentes no controlados dependen del DOM para almacenar sus valores, utilizando referencias (`refs`). Son útiles cuando no se requiere una gestión compleja del estado.

## Tipos de Inputs y Manejo de Datos

React permite trabajar con distintos tipos de `input` como `text`, `radio`, `checkbox`, y `select`, todos los cuales pueden gestionarse mediante el evento `onChange` para actualizar el estado.

## Manejo de Eventos en Formularios

- **onChange:** Utilizado para actualizar el estado cada vez que cambia el valor de un campo.
- **onSubmit:** Gestiona el envío de datos, a menudo usando `e.preventDefault()` para evitar la recarga de la página.

## Validación de Formularios

Las validaciones en React se pueden realizar en:

- **Validación básica:** Con condicionales en `onSubmit` o `onChange`.
- **Validación avanzada:** Utilizando bibliotecas externas como Formik o Yup para una mayor personalización y reglas complejas.

## React Hook Form

React Hook Form es una biblioteca diseñada para simplificar la gestión de formularios en React. Permite reducir el número de re-renderizados y el código necesario para implementar formularios.

### Características Principales

- **Register:** Se utiliza para registrar cada campo del formulario.
- **HandleSubmit:** Facilita la captura del evento de envío del formulario.
- **Watch y Reset:** `watch` permite monitorear los valores de los campos en tiempo real, y `reset` restaura el formulario a sus valores iniciales.

### Instalación

Para instalar React Hook Form:

```bash
npm install react-hook-form
```

### Ejemplo de Uso

```jsx
import { useForm } from "react-hook-form";

function FormularioEjemplo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nombre", { required: true })} />
      {errors.nombre && <span>Este campo es obligatorio</span>}
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## Ejemplo de Uso Completo

Aquí tienes una implementación completa de un formulario con React Hook Form, que incluye validaciones y manejo de errores para asegurar una experiencia de usuario óptima.

## Conclusión

Trabajar con formularios en React, especialmente con herramientas como React Hook Form, permite crear interfaces de usuario eficientes, fáciles de mantener y con una excelente gestión de validaciones. React Hook Form optimiza el rendimiento y simplifica la lógica de los formularios, haciéndolo una elección ideal para aplicaciones complejas.

Made by Prof. Martin with a lot of 💖 and ☕

```

```
