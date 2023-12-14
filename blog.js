const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');'
mongoose.connect('mongodb://localhost/blog',{ useNewUrlParser:true,useUnifiedTopology:true})
 .then(()=> {
console.log('Connected to MongoDB');
 }) 
 .catch((error)=> {
console.error('Error connecting to MongoDB:', error); 
}); 
app.use(express.static('public'));
 app.get('/',(req, res) => {
	 res.sendFile(__dirname + '/index.html');
 });
  app.get('/posts',(req, res) => { 
	// Retrieve posts from MongoDB and send them as a response
 });
  app.get('/write',(req, res) => {
	 res.sendFile(__dirname + '/write.html');
 }); 
 app.post('/write',(req, res) => {
	 // Save the new post to MongoDB
 });
  app.listen(3000,() => {
	 console.log('Server is running on port 8083');
 });
