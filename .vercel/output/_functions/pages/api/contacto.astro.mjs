import '../../chunks/astro/assets-service_-NjdxnpG.mjs';
import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Solicitud inválida o vacía" }),
      { status: 400 }
    );
  }

  const { nombre, apellido, correo, mensaje } = body || {};

  if (!nombre || !apellido || !correo || !mensaje) {
    return new Response(
      JSON.stringify({ message: "Faltan datos requeridos" }),
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ejtr18@gmail.com",
      pass: "biowtapdsonadpcx",
    },
  });

  const mailOptions = {
    from: correo,
    to: "ejtr18@gmail.com",
    subject: "Contacto de Red Global Restauracion",
    text: `Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Correo enviado con éxito" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return new Response(JSON.stringify({ message: "Error al enviar correo" }), {
      status: 500,
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
