// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   res.write("<h1>Hello node write</h1>");
//   res.write("Hello node write");
//   res.end("Hello node");
// });
// server.listen(3065, () => {
//   console.log("서버 실행 중");
// });

// app.js가 서비스의 본체

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const passportConfig = require('./passport');

dotenv.config();
const db = require('./models');
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공\n');
  })
  .catch(console.error);
passportConfig();

// app.use(cors({
//   origin: 'https://nodebird.com'
// }));
if (process.env.NODE_ENV === 'production') {
  // 배포모드
  app.use(morgan('combined')); // 로그가 자세해져서 접속자의 ip도 알수있음
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan('dev'));
}
app.use(
  cors({
    // origin: 'http://localhost:3060',
    // origin: ['http://localhost:3060', 'nodebird.com'],
    origin: true,
    credentials: true, // 쿠키를 같이 전달하고 싶으면 true로
  })
);
app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json()); // json의 형식을 req.body로 넣어줌
app.use(express.urlencoded({ extended: true })); // form submit했을 때 urlencoded방식으로 넘어오는 data를 req.body로 넣어줌
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.json('22hello express');
});

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

// app.use((err, req, res, next) => {

// })

app.listen(80, () => {
  console.log('서버 실행 중\n');
});
