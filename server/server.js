const express = require('express');
const app = express();
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config({ path: '../.env' });

const mc_api_key = new Mailchimp(process.env.MAILCHIMP_API_KEY);
const listId = process.env.MAILCHIMP_LIST_ID;

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

app.get('/subscribe', (req, res) => {
    mailchimp
        .post(`/lists/${listId}/members`, {
            email_address: req.query.email,
            status: 'subscribed',
        })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Express is listening on port ${port}`);