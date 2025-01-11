const express = require ('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');    
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();

// Config keys 
const db = require('./config/keys').mongoURI;


// connect to Mongod db
mongoose 
.connect(db)
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log(err));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.get('/', (req, res) => {
    res.send('Hello World this server on port 5000 ');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});