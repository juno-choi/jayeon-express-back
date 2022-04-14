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

//로그인
router.post('/login', async (req, res)=>{
    console.info('로그인 요청');
    const body = req.body;
    console.log(body);

    await axios.post(url + '/login-service/game/login',body)
    .then(response => {
        console.log(response);
        if(response.status == 200){
            const token = response.data.token;
            console.info('로그인 정상 처리');
            res.set({
                token : token,
                user_id : body.userId
            }).send()
        }
    })
    .catch(error => {
        console.error('로그인 실패');
        console.error(error.response.data);
        res.send(error.response.data);
    })
});

module.exports = router;