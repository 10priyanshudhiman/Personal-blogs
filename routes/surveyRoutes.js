const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const survetTemplate  = require('../services/emailTemplates/surveyTemplates');

module.exports = app => {
    app.post('/api/surveys', requireLogin, ( req, res ) => {
       const { title, subject, body, recipients } =  req.body;

       const survey = new Survey({
           title,
           subject,
           body,
           recipients: recipients.split(',').map(email =>  ({ email: email})),
           _user: req.user.id,
           dateSent: Date.now()
       });

       // Great palce to send an Email

       const mailer = new Mailer(survey, surveyTemplate(survey));


    });
};

//SendGrid key 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