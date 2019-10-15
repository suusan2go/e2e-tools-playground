exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "http://localhost",
      browser: "chrome",
      restart: false,
      windowSize: "1920x1680",
    },
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "codeceptjs",
  translation: "ja-JP",
  plugins: {
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
    },
  },
};
