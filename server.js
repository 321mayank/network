const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const registerCollegeUsers = require('./router/college/register');

app.use('/', registerCollegeUsers);


app.all('*',(req,res)=>{
    res.sendStatus(404)
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  