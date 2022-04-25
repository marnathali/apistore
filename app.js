const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  return res.json({
    name: 'Nathali Anzola',
    msg: 'hello world'
  })
})
app.listen(port, ()=>{
  console.log(`listening at http://localhost:${port}/`);
})
