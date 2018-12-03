const crypto = require('crypto');

var configName = process.env.SAUCE_CFG || process.env.SAUCE_USERNAME;
var cfg = require('./sauce-' + configName);

const key = `${cfg.username}:${cfg.accessKey}`
const jobId = process.env.JOB_ID || process.argv[2];

console.log(`Finding hmac for\nkey: ${key}\njobId: ${jobId}`);

const hmac = crypto.createHmac('md5', key);
const result = hmac.update(jobId).digest('hex');

console.log(`\n\nauth: ${result}`);
