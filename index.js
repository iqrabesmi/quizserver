const express = require('express');
const cors = require('cors');
const { makeConnection } = require('./connect');
const { userRouter } = require('./routes/user');
const { JSTRoute } = require('./routes/JST');
const { TotalRoute } = require('./routes/total');

const app = express();

// middle wares
app.use(cors({ origin: "*" }));
app.use(express.urlencoded( { extended : false } ));
app.use(express.json());


// Connect to db
makeConnection().then( () => console.log("Connected to DB") );



// Routes
app.use( '/user' , userRouter );
app.use( '/JST' , JSTRoute );
app.use( '/total' , TotalRoute );

const port = process.env.PORT || 3000;

app.listen(
    3000,
    () => { console.log(`Server started on port ${port}`) } 
);