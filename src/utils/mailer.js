const nodeMailer = require('nodemailer')

//read json file
// var fs = require('fs');
// var data = fs.readFileSync('./test.json');
// var words = JSON.parse(data);

const adminEmail = 'jtexpressmienbac2@gmail.com'
const adminPassword = 'monlgdztdklzcjkw'
const mailHost = 'smtp.gmail.com'
const mailPort = 587

const sendMail = (to, subject, htmlContent) => {
  const transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false,
    auth: {
      user: adminEmail,
      pass: adminPassword
    }
  })
  const options = {
    from: adminEmail, 
    bcc: to,
    subject: subject,
    html: htmlContent 
  }
  return transporter.sendMail(options)
}
module.exports = {
  sendMail: sendMail
}