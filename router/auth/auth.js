const router = require('express').Router();
const axios = require('axios');
const url = process.env.API_URL;

require('dotenv').config()

router.post('/join', async (req, res)=>{
    console.info('회원가입 요청 시작');
    const body = req.body;
    await axios.post('http://api.jayeonapple.com/login-service/game/join',body)
    .then(response => {
        console.info('회원가입 요청 정상 종료');
        res.send(response.data);
    })
    .catch(error => {
        console.error('회원가입 요청 실패');
        res.send(error.response.data);
    })
    
});

module.exports = router;