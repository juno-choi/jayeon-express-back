const router = require('express').Router();
const axios = require('axios');
require('dotenv').config()

const url = process.env.API_URL;


//회원가입
router.post('/join', async (req, res)=>{
    console.info('회원가입 요청 시작');
    const body = req.body;
    await axios.post(url + '/login-service/game/join',body)
    .then(response => {
        console.info('회원가입 요청 정상 종료');
        res.send(response.data);
    })
    .catch(error => {
        console.error('회원가입 요청 실패');
        console.error(error.response.data);
        res.send(error.response.data);
    })
    
});

module.exports = router;