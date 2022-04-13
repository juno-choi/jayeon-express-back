const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const auth = require('./router/auth/auth')

require('dotenv').config()

app.use(bodyParser.json())
app.use('/api/auth/', auth)



const member = [
    {
        id : 1,
        name : '최준호',
        pw : '123123'
    },
    {
        id : 2,
        name : '테스터',
        pw : '123456'
    }
]

app.get('/apikey', (req, res)=>{
    res.send(process.env.API_KEY);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/user', (req,res)=>{
    res.sendStatus(401);
});

app.post('/api/user', (req,res)=>{
    const name = req.body.name;
    const pw = req.body.pw;

    const result = member.find(m => m.name == name && m.pw == pw);

    if(result){
        res.send(result);
    }else{
        res.sendStatus(401);
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})