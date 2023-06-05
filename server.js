const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const registerCollegeUsers = require('./router/college/register');
const collegeLogin = require('./router/college/login');

app.use('/', registerCollegeUsers);
app.use('/', collegeLogin);

app.all('*',(req,res)=>{
    res.sendStatus(404)
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  