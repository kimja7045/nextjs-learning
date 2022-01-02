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

const postRouter = require('./routes/post');
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
app.use(
  cors({
    origin: true,
  })
);
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
  res.send('hello express');
});
app.get('/posts', (req, res) => {
  res.json([{ id: 1, name: 'luke' }]);
});

app.use('/post', postRouter);
app.use('/user', userRouter);

// app.use((err, req, res, next) => {

// })

app.listen(3065, () => {
  console.log('서버 실행 중\n');
});
