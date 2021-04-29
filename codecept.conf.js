exports.config = {
  tests: './tests/*Test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.maltapark.com',
      show: true,
      windowSize: '1200x900'
    },
  },
  include: {
    I: './steps_file.js',
    domains: './helpers/data/domains.js',
    classifiedsList: './helpers/data/classifiedsList.js',
    homePage: './helpers/pages/homePage.js',
    searchResultsPage: './helpers/pages/searchResultsPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'MaltaPark',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    },
    autoDelay: {
      enabled: true
    }
  }
}