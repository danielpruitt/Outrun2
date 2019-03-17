var express = require('express');
var router = express.Router();

const nodemailer = require("nodemailer");
const creds = require("../mail/mailconfig");

const transport = { 
    host: "smtp.gmail.com",
    auth: {
        user:creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if(error) { 
        console.log("error in transport");
    } else {
        console.log("server ready to send");
    }
});

router.post('/send',(req,res, next) => { 
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.question;
    let content = `name: ${name} \n email: ${email} \n message: ${message}`;

    let mail = { 
        from: name,
        to: "droopymccool9@gmail.com",
        subject: "New Message from " + email,
        text: content
    };

    transporter.sendMail(mail,(err, data) => { 
        if (err){ 
            res.json({
                msg:"fail"
            });
        } else {
            res.json({
                msg: "succes"
            });
        };

    });
});