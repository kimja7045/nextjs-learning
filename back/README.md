const app = express()

app.options - 찔러보기(요청 보낼수도 있는)

app.head - 헤더만 가져오기(헤더/바디)

cross-env, hpp, helmet - 보안에 도움되는 패키지

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

# aws

ls -al : 권한까지 확인가능

sudo apt-get install -y mysql-server

sudo su 로 root 계정으로 전환

foreground process - 터미널 끄면 같이 꺼짐 (node app)

background process - 터미널 꺼도 안 꺼짐 (pm2 start app.js)

npx pm2 monit - 로그 확인
npx pm2 kill
npx pm2 reload all

npx pm2 logs --error - 에러로그 확인
npx pm2 list

# lambda

함수명 - handler

sharp - 이미지 리사이징에 사용

lambda 폴더 경로에서 zip -r aws-upload.zip ./\* - 파일 묶기

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" - 알집화

unzip awscliv2.zip

sudo ./aws/install

aws configure

Default output format - json

aws s3 cp "aws-upload.zip" s3://react-nodebird-luke - s3 경로에 알집파일 복사

aws lambda 설정

핸들러 index.handler = index.js안의 exports 핸들러

메모리 256MB, 제한시간 30초로 수정

역할을 AWS 정책 템플릿에서 새 역할 생성으로 수정 -> S3객체 읽기 전용 권한 선택

트리거 - s3 추가

접두사 - original/
