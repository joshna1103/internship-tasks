const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Connect to MongoDB 
mongoose.connect('mongodb://localhost/registration', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Connected to MongoDB'))
  .catch(err=> console.error('Failed to connect to MongoDB', err));
// Define User schema  
const userSchema = new mongoose.Schema({
name:String,
email:String,
password:String});
 const User= mongoose.model('User',userSchema); 
 // Middleware
 app.use(bodyParser.urlencoded({ extended:false })); 
 // Handle registration form submission
 app.post('/register',( req, res) => {
	 
	 const { name, email, password } = req.body;
     const user = new User({ name, email, password }); 
 user.save()
   .then(()=> res.send('Registration successful'))
   .catch(err=> res.status(500).send('Registration successful'))
   });
   
   // Start the server
   const port=8083;
   app.listen(port,() => console.log('Server started on port ${port}'));
    
   

 0