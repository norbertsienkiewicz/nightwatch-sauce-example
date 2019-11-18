var cfg = require('./accounts.json');

if (!process.env.SAUCE_USER) {
  console.error('Please provide SAUCE_USER venv');
  process.exit(1);
}
var now = new Date();
var buildName = process.env.BUILD_NAME || `nightwatch-e2e-debug-${process.env.DATE_WITH_TIME || now.getTime()}`;
var user = cfg.data[process.env.SAUCE_USER];
var testFile = cfg.settings[process.env.type] || 'guineaPig.js';

console.info('username:', user.username, 'build name:', buildName);

if (user.disabled) {
  console.error('user ', user.username, ' is disabled in settings.');
  process.exit(1);
}

process.env.SAUCE_USERNAME = user.username;
process.env.SAUCE_ACCESS_KEY = user.accessKey;
process.env.SAUCE_TUNNEL_ID = user.tunnelId;
const SAUCE_URL = user.url || 'ondemand.saucelabs.com';

module.exports = {
  src_folders: ['./test/' + testFile],
  test_settings : {
    default: {
      launch_url: `https://${SAUCE_URL}:443`,
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
        build: buildName,
        extendedDebugging: true,
        capturePerformance: true,
			}
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
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

