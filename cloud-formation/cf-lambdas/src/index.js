const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');
const s3 = new S3Client({ region: 'us-east-1' }); // replace "us-east-1" with your AWS region

exports.handler = async function(event) {
  console.log('Event: %o', event);

  const command = new ListBucketsCommand({});
  const response = await s3.send(command);
  const { Buckets } = response;

  console.log('Buckets in region: %o', Buckets)

  return Buckets;
};
