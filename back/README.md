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

#

주소를 캐싱하면 데이터까지 같이 캐싱되는데, post나 put, patch는 캐싱이 안되지만 get은 데이터캐싱도 같이 할 수 있어서 get만의 이점이 있음

ls -al : 권한까지 확인가능

sudo apt-get install -y mysql-server

sudo su 로 root 계정으로 전환
