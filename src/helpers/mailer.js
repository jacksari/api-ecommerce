const nodemailer = require("nodemailer");
const { environment } = require("../config/environments/environment");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: environment.USER_EMAIL, // generated ethereal user
      pass: environment.USER_PASSWORD, // generated ethereal password
    },
});

transporter.verify().then(()=>{
    console.log('Conexión del envio de emails correcto');
}).catch(e=>{
    console.log('error', e);
})

module.exports = {
    transporter
}
