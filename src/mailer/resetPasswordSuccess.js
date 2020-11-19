const nodeMailer = require('../config/nodemailer');


// this is another way of exporting a method
exports.resetPasswordSuccss = (user) => {
    //this is the message body for mail when password change succcessfully
    nodeMailer.transporter.sendMail({
       from: 'passwordreset@demo.com',
       to: user.email,
       subject: 'Your password has been changed',
       text:  'Hello,\n\n' +
       'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }
        req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        console.log('Message sent', info);
        return;
    });
}



// this is another way of exporting a method
exports.hello = (user) => {
    //this is the message body for mail when password change succcessfully
    nodeMailer.transporter.sendMail({
       from: 'passwordreset@demo.com',
       to: user.email,
       subject: 'Welcome',
       text:  'Hello,\n\n' +
       'Hola ' + user.email + '  bienvenido a Arte Stelen'
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }
        req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        console.log('Message sent', info);
        return;
    });
}




// this is another way of exporting a method
exports.pago = ( order) => {
    //this is the message body for mail when password change succcessfully
    nodeMailer.transporter.sendMail({
       from: 'passwordreset@demo.com',
       to: order.email,
       subject: 'Welcome',
       text:  'Hola,\n\n' +
       'Hola ' + order.email + '  hemos registrado tu compra, tu pedido será enviado en la semana'
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }
        req.flash('info', 'An e-mail has been sent to ' + order.email + ' with further instructions.');
        console.log('Message sent', info);
        return;
    });
}













// this is another way of exporting a method
exports.venta = ( user) => {
    //this is the message body for mail when password change succcessfully
    nodeMailer.transporter.sendMail({
       from: 'passwordreset@demo.com',
       to: 'lehj09@gmail.com',
       subject: 'Venta',
       text:  'Hello,\n\n' +
       'Alguien llenó un formulario de venta, fijate en pedidos de qué se trata'
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }
        req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        console.log('Message sent', info);
        return;
    });
}


// this is another way of exporting a method
exports.pago = (user, order) => {
    //this is the message body for mail when password change succcessfully
    nodeMailer.transporter.sendMail({
       from: 'passwordreset@demo.com',
       to: 'lehj09@gmail.com',
       subject: 'Venta',
       text:  'Hello,\n\n' +
       'Alguien llenó un formulario de venta, fijate en pedidos de qué se trata'+ order.total +'jj'
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }
       // req.flash('info', 'An e-mail has been sent to ' + order.email + ' with further instructions.');
        console.log('Message sent', info);
        return;
    });
}