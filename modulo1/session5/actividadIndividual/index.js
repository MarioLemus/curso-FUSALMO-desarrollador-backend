const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "",
    pass: "",
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: '"Mario Lemus 👻" <>',
    to: "",
    subject: "Actividad: Prueba de backend con nodemailer (Mario Lemus)",
    text: "Prueba de backend con nodemailer - Mario Lemus",
  });

  console.log("Message sent: %s", info.messageId)
}

main().catch(console.error);