/// "npm run invitation" will run this file

let hogan = require('hogan.js')
let fs = require('fs')
require('../secrets')
function readFileAsString(file) {
  return fs.readFileSync(__dirname + file).toString()
}
function getTemplate(file) {
  let template = ''
  template = readFileAsString(file)
  return template
}

let compiledTemplate = hogan.compile(getTemplate('/../public/Invitation.html'))

const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const OAuth2 = google.auth.OAuth2

const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET, // Client Secret
  'https://developers.google.com/oauthplayground' // Redirect URL
)
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
})

async function sendEmail(guest) {
  const accessToken = oauth2Client.getAccessToken()
  const mailConfig = {
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GOOGLE_EMAIL_ADDRESS,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken
    }
  }
  const transporter = nodemailer.createTransport(mailConfig)
  const html = compiledTemplate.render(guest).toString()
  let emailBody = {
    from: process.env.GOOGLE_EMAIL_ADDRESS, // sender address
    to: guest.email, // list of receivers
    subject: `Wedding Invitation from April & John Angland`, // Subject line
    html
  }
  let info = await transporter.sendMail(emailBody)
  console.log(
    `Message sent to ${guest.nickName} at ${guest.email}: %s`,
    info.messageId
  )
}
/// Testing emails april's own

sendEmail({email: 'somewhere@somewhere.com', nickName: 'someone'})
