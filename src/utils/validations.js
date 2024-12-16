const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ ]{1,30}$/,
  correo: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  string: /^[a-zA-ZÀ-ÿ]+([a-zA-ZÀ-ÿ0-9#\s,.-]){3,50}$/,
};

function validarCorreo(input, div, mensaje) {
  const parametro = input.value;
  const valid = expresiones.correo.test(parametro);

  if (!parametro) {
    div.textContent = `${mensaje} debe introducir datos.`;
    input.classList.add("input-error");
    return false;
  }
  if (!valid) {
    div.textContent = `${mensaje} no es un correo válido.`;
    input.classList.add("input-error");
    return false;
  }

  div.textContent = "";
  input.classList.remove("input-error");
  return true;
}

function validarNombres(input, div, mensaje) {
  const parametro = input.value;
  const valid = expresiones.nombre.test(parametro);

  if (!parametro) {
    div.textContent = `${mensaje} debe introducir datos.`;
    input.classList.add("input-error");
    return false;
  }
  if (!valid) {
    div.textContent = `${mensaje} no es un nombre válido.`;
    input.classList.add("input-error");
    return false;
  }

  div.textContent = "";
  input.classList.remove("input-error");
  return true;
}

function validarString(input, div, mensaje) {
  const parametro = input.value;
  const valid = expresiones.string.test(parametro);

  if (!parametro) {
    div.textContent = `${mensaje} debe introducir datos.`;
    input.classList.add("input-error");
    return false;
  }
  if (!valid) {
    div.textContent = `${mensaje} no es una frase válida.`;
    input.classList.add("input-error");
    return false;
  }

  div.textContent = "";
  input.classList.remove("input-error");
  return true;
}

export { validarCorreo, validarNombres, validarString };
