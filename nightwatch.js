var configName = process.env.SAUCE_CFG || process.env.SAUCE_USERNAME;
var cfg = require('./sauce-' + configName);
var now = new Date();
var buildName = `nightwatch-e2e-debug-${process.env.DATE_WITH_TIME || now.getTime()}`;

console.log('username:', cfg.username, 'build name:', buildName);

process.env.SAUCE_USERNAME = cfg.username;
process.env.SAUCE_ACCESS_KEY = cfg.accessKey;
process.env.SAUCE_TUNNEL_ID = cfg.tunnelId;
const SAUCE_URL = cfg.url || 'ondemand.saucelabs.com';

module.exports = {
  src_folders: ['./test/gineaPigLong.js'],
  //src_folders: ['./test/gineaFailing.js'],
  test_settings : {
    default: {
      launch_url: `http://${SAUCE_URL}:80`,
      selenium_port: 80,
      selenium_host: SAUCE_URL,
      silent: true,
      username: process.env.SAUCE_USERNAME,
      access_key: process.env.SAUCE_ACCESS_KEY,
      screenshots: {
        enabled: false,
        path: './screenshots',
      },
      globals: {
        waitForConditionTimeout: 10000,
      },
      desiredCapabilities: {
				build: buildName
			}
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        extendedDebugging : true,
      },
    },
    ie11: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11.0',
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
      }
    },
  },
};

