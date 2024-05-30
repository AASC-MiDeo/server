const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; //3000번 사용


const validateInputs = require('./validators'); //데이터 입력값 유효성 검사 인자 ->(helmet, temperature, sound, gas)
const checkWarnings = require('./warnings'); //입력 받은 데이터 값이 안전 기준 내에 있는지를 검사한 후 초과하면 경고 출력

// JSON 요청 본문을 파싱
app.use(bodyParser.json());

// POST 요청 처리
app.post('/', (req, res) => {
  const { helmet, temperature, sound, gas } = req.body;

  console.log('Helmet:', helmet);
  console.log('Temperature:', temperature);
  console.log('Sound:', sound);
  console.log('Gas:', gas);

  if(validateInputs(helmet, temperature, sound, gas)) { //유효성 검사 이후
    let [errNum, warnings] = checkWarnings(helmet, temperature, sound, gas); //경고 메시지 생성
    if(errNum.length === 0) console.log('이상 X');
  }
  // HW단으로 응답
  res.send('to HW : Data received successfully');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

