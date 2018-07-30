const { MongoClient } = require('mongodb');
const app = require('express')();
const http = require('http').Server(app);
// const cors = require('cors');

const port = 5000;
http.listen(port, () => {
    console.log(`App is listening on ${port}`);
});

const uri = 'mongodb://revsearch-admin:RevMyS3archBaby@ds259241.mlab.com:59241/revsearch';

// Create a database connection context.
MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;
    const db = client.db('revsearch');
    /*  ~~~~~~~~ HTTP ~~~~~~~~ */
    // endpoint to get all available robots
    app.get('/my-papers', (err2, response) => {
        db.collection('papers').find().toArray((err3, result) => {
            // response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            response.send(result);
        });
    });
    app.post('/my-papers', (err2, response) => {
        db.collection('papers').save({ name: 'coolPaper' }, (err3, result) => {
            // response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            response.send(result);
        });
    });
});
