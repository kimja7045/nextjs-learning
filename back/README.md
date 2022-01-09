const app = express()

#

app.options - 찔러보기(요청 보낼수도 있는)

app.head - 헤더만 가져오기(헤더/바디)

#

npx sequelize init

sequelize

- 내부적으로 mysql2를 사용

mysql2

- 드라이버

npx sequelize db:create

bcrypt(비크립트) - 비밀번호 암호화 라이브러리

#

http code

300 - redirect or cache

파일은 보통 s3 클라우드에 올려서 cdn 캐싱을 적용
