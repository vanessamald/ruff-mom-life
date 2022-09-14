const express = require('express');
const app = express();
const path = require('path');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config({ path: __dirname +  "/.env" });

const mc_api_key = new Mailchimp(process.env.MAILCHIMP_API_KEY);
const list_id = process.env.MAILCHIMP_LIST_ID;

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

app.get('/api/subscribe', (req, res) => {
    mailchimp
        .post(`/lists/${list_id}/members`, {
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


const port = process.env.PORT || 3001;
app.listen(port);

console.log(`Express is listening on port ${port}`);