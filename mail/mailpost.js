// router.post('/send',(req,res, next) => { 
//     let name = req.body.name;
//     let email = req.body.email;
//     let message = req.body.question;
//     let content = `name: ${name} \n email: ${email} \n message: ${message}`;

//     let mail = { 
//         from: name,
//         to: "droopymccool9@gmail.com",
//         subject: "New Message from " + email,
//         text: content
//     };

//     transporter.sendMail(mail,(err, data) => { 
//         if (err){ 
//             res.json({
//                 msg:"fail"
//             });
//         } else {
//             res.json({
//                 msg: "succes"
//             });
//         };

//     });
// });