//import what we need
const express = require("express");
require("dotenv").config();
const massive = require("massive");
const { CONNECTION_STRING, PORT } = process.env;
const app = express();
app.use(express.json());

//create routes
app.post('/api/tweets/', async (req, res) => {
    //connect to our database
    const db = app.get('db')
    //get the data from the req.body
    const {tweet} = req.body
    //save the data to the database
    const addTweet = await db.add_tweet([tweet])
    //send the data back to the client
    res.status(200).send(addTweet);
})
//create listener

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
     rejectUnauthorized: false,
    },
   }).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected')
   })
   

app.listen(PORT, () => {
  console.log(`Hey you, you're finally awake on ${PORT}`);
});
