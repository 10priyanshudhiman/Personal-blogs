// Emailer is not Working because i Don't have a domain//


const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');


const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate  = require('../services/emailTemplates/surveyTemplates');

module.exports = app => {
    app.post('/api/surveys', requireLogin, async ( req, res ) => {
       const { title, subject, body, recipients } =  req.body;

       const survey = new Survey({
           title,
           subject,
           body,
        //    recipients: recipients.split(',').map(email =>  ({ email: email})),
           _user: req.user.id,
           dateSent: Date.now()
       });

       // Great palce to send an Email
    //    const mailer = new Mailer(survey, surveyTemplate(survey));
    //    mailer.send().then(() => {
    //        console.log("Message sent");
    //    }).catch((error) => {
    //        console.log(error.response.body);
    //    })
    try{
        await survey.save();
         const user = await req.user.save();
         res.send(user);

    } catch(err) {
        res.status(422);
    }
         
    });
};

//SendGrid key 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