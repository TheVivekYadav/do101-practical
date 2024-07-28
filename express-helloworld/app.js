var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/twitter', (req, res) => {
    res.send('Twitter');
  });
  
  app.get('/login', (req, res) => {
    res.send('<h1>Please Login at chai aur code </h1>');
  });
  
  app.get('/myData',(req, res)=>{
    res.json({name:"vivek",
      age:"12"
    })
  })
  
  app.get('/vivek', (req, res) => {
    res.send('<h2>Chai Aur Code</h2>');
  });

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});