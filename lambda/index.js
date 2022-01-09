const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
  const Bucket = event.Records[0].s3.bucket.name;
  const Key = decodeURIComponent(event.Records[0].s3.object.key); // 한글문제 해결하기위해 decodeURIComponent 사용
  console.log(Bucket, Key);
  const filename = Key.split('/')[Key.split('/').length - 1];
  const ext = Key.split('.')[Key.split('.').length - 1].toLowerCase(); // 확장자 .PNG -> .png
  const requiredFormat = ext === 'jpg' ? 'jpeg' : ext;

  console.log('filename', filename, 'ext', ext);

  try {
    const s3Object = await s3.getObject({ Bucket, Key }).promise();
    console.log('original', s3Object.Body.length);
    const resizedImage = await sharp(s3Object.Body)
      .resize(400, 400, {
        fit: 'inside', // 이 사이즈안에 딱 맞게끔
      })
      .toFormat(requiredFormat)
      .toBuffer();

    await s3
      .putObject({
        Bucket,
        Key: `thumb/${filename}`, //폴더명
        Body: resizedImage,
      })
      .promise();
    console.log('put', resizedImage.length);
    return callback(null, `thumb/${filename}`); // 에러
  } catch (error) {
    console.error(error);
    return callback(error); // = passport의 done과 비슷
  }
};
