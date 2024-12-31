const config = {
    workers: 10, // Number of parallel instances to run
    timeout: 0, // Disable the timeout for long-running tests
    use: {
      browserName: 'chromium', // Default browser
      headless: true, // Run tests in headless mode
      screenshot: 'only-on-failure', // Capture screenshots on failure
      video: 'retain-on-failure', // Record videos for failed tests
    },
  };
  
  module.exports = config;
  