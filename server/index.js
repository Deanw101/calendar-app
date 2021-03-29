const express = require('express');
const path = require('path');
const compression = require('compression');
const RateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3001

const app = express();

// Set env variables in dev env
if (app.get('env') === 'development') require('dotenv').config();


// rate limit config
var apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests
  delayMs: 0 // disabled until limit is met
});

// nodemailer setup

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: 'deansguis@gmail.com',
    pass: process.env.EMAIL_PASS,
  },
  secure: true,
});


// middleware
app.use(compression());
app.use('/api/*', apiLimiter); // activate limiter for api calls only
app.use(morgan('tiny')); // server logger
app.use(helmet()); // header security
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '1000kb' }));



app.post('/api/schedulerequest', async (req, res) => {
  try {

    console.log('Schedule Reqest:', req.body);

    const { fname, lname, root_phone, email, street_number, city,
    state, postal_code, datetime } = req.body;

    const mailData = {
      from: 'deansguis@gmail.com',  // sender address
      to: email,   // list of receivers
      subject: 'Sending Email using Node.js',
      text: 'That was easy!',
      html: `<b>Hey there! </b>
      <br> This is our first message sent with Nodemailer<br/>`,
    };

    transporter.sendMail(mailData, function (err, info) {
       if(err) {
         throw err
       } else {
         console.log(info);
         res.status(201).json({ received: true });
       }
    });


  } catch (e) {

    console.log('ERROR'. e.message);

    res.status(400).json({ error: e.message });

  }
})


app.use(express.static('build'));
app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


app.listen(PORT, () => console.log('Server OK', PORT));
