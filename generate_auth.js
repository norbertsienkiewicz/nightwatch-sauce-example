const crypto = require('crypto');

var cfg = require('./accounts.json');

if (!process.env.SAUCE_USER) {
  console.error('Please provide SAUCE_USER venv');
  process.exit(1);
}
const jobId = process.env.JOB_ID || process.argv[2];
if (!jobId) {
  console.error('Please provide JOB_ID venv');
  process.exit(1);
}

var user = cfg.data[process.env.SAUCE_USER];

const key = `${user.username}:${user.accessKey}`

console.log(`Finding hmac for\nkey: ${key}\njobId: ${jobId}`);

const hmac = crypto.createHmac('md5', key);
const result = hmac.update(jobId).digest('hex');

console.log(`\n\nauth: ${result}`);
