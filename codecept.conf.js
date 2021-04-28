exports.config = {
  tests: './tests/*Test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.maltapark.com',
      show: true,
      windowSize: '1200x900'
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    }
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
  name: 'Maltapark',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}