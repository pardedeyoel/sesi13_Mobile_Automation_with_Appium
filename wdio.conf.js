export const config = {
  runner: 'local',
  specs: ['./appium_test/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',

    'appium:deviceName': 'e769896', //hasil dari adb devices
    'appium:platformVersion': '10', //versi OS androidnya

    'appium:automationName': 'UiAutomator2',

    //Cara ceknya:
    // di OS Windows: adb shell dumpsys activity activities | findstr "ResumedActivity" 
    //di OS Mac: adb shell dumpsys activity activities | grep "ResumedActivity"

    //nama package dari aplikasi yang ingin ditest. 
    'appium:appPackage': 'com.oneplus.calculator', //Lagi test pakai aplikasi Calculator
    'appium:appActivity': '.Calculator', //nama activity dari aplikasi yang ingin ditest
    'appium:noReset': true
  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
  }]],
  hostname: 'localhost',
  port: 4723,
  path: '/',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  afterTest: async function (_, __, { passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  }
};
