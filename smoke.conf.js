const {join} = require('path');

exports.config = {

  runner: 'local',

  specs: [
    //'./test/specs/smoke/*.js',
    './test/specs/images/*.js'
  ],

  exclude: [],

  maxInstances: 10,

  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    // 'goog:chromeOptions': {
    //   args: ['--headless'],
    // }
  }],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'silent',

  bail: 0,

  baseUrl: 'http://3205.today',

  waitforTimeout: 10000,

  connectionRetryTimeout: 90000,

  connectionRetryCount: 3,

  services: [
    'selenium-standalone',
    ['image-comparison',
      {
        baselineFolder: join(process.cwd(), './screenshots/baseline'),
        formatImageName: '{tag}',
        screenshotPath: join(process.cwd(), './screenshots/'),
        savePerInstance: false,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
      }]
  ],

  framework: 'mocha',

  reporters: ['spec', 'allure'],
  reporterOptions: {
    allure: {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true
    }
  },

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    compilers: ['js:@babel/register']
  },

};
