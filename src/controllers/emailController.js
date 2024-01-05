const mailer = require('../utils/mailer')

let sendMail = async (req, res) => {
  try {
    const {to, subject, body } = req.body

    await mailer.sendMail(to, subject, body)
    res.redirect('/')
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

module.exports = {
  sendMail: sendMail
}