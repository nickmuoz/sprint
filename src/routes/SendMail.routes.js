const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');




router.post('/Test', async (req, res) => {
    res.send('Esta es un request post de sendmail')
})

router.post ('/SendMail', async (req, res) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.mi.com.co',
        port: 465,
        secure: true,
        auth: {
            user:"negocioscol@interactivebytes.co",
            pass:"Mvpemq100v$"
        },
        tls:{
            rejectUnauthorized:false
        }
        
    });

    let mailOptions = {
        from:'negocioscol@interactivebytes.co',
        to:req.body.email,
        subject:req.body.asunto,
        text:req.body.mensaje,
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("Email enviado", info.mensaje)
            console.log("url de Mensaje", nodemailer.getTestMessageUrl(info))
        }
        transporter.close();
    })
    const from = req.body.email
    res.send('Esta es un request post de sendmail ' + from)
    
    
        
    })
    
    
    
    module.exports = router