const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; //3000번 사용

// JSON 요청 본문을 파싱
app.use(bodyParser.json());

// POST 요청 처리
app.post('/', (req, res) => {
  const { helmet, temperature, sound, gas } = req.body;

  console.log('Helmet:', helmet);
  console.log('Temperature:', temperature);
  console.log('Sound:', sound);
  console.log('Gas:', gas);

  // HW단으로 응답
  res.send('Data received successfully');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


//피방에서 작성해서 못 돌려봤어용 환경변수 어쩌고 ㄱ-