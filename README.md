# PlaywrightFramework

Playwright Javascript Automation Framework

## Playwright Introduction

* Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast. Headless execution is supported for all browsers on all platforms.
* As Playwright is written by the creators of the Puppeteer, you would find a lot of similarities between them.
* Playwright has its own test runner for end-to-end tests, we call it Playwright Test.
* Cross-browser. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.
* Cross-platform. Test on Windows, Linux, and macOS, locally or on CI, headless or headed.
* Cross-language. Use the Playwright API in Typescript, JavaScript, Python, .NET, Java. The core framework is implemented using Javascript.
* Playwright development is sponsored by Microsoft.


# I. Pre-requisites
- NodeJS version > 14 (Node.js 14 is no longer supported since it reached its end-of-life on April 30, 2023.)
- Playwright latest version

# II. Installation

```bash
npm install
```

```bash
npm init playwright@latest
```

# III. Project Structure

```bash
project                                               
├─ constants                                         // Project's constants (e.g. Frontend and API URL & endpoint)
├─ core                                              // Core helper functions, models, etc
│  ├─ api                                            
│  │  ├─ constants                                   // Constants for API requests (e.g., authentication, headers, responses)
│  │  ├─ helper                                    
│  │  │  ├─ api-request.js                           // Models for API request.
│  │  │  ├─ rest-client.js                           // REST API Client used for working with APIs.
│  │  ├─ browser                                    
│  │  │  ├─ browser-management.js                    // Manages the browser, browser context, and page instances.   
│  │  │  ├─ browser-utils.js                         // Browser-related utility functions.
│  │  ├─ element                                     // Utility functions for interacting with browser.
│  │  ├─ fixture  
│  │  │  ├─ base-fixture.js                          // Base fixtures for tests.
├─ fixtures           
│  ├─ page-fixture.js                                // Page fixtures for UI testing                                   
├─ helpers/api                                       // API-related helper functions.
├─ models                                            // Data models used in the project.
├─ page-objects                                      // Page objects for UI testing.
├─ test-data                                         // Test data files.
├─ tests                                             // Test suites.
│  ├─ api                                            // API test suites.                                   
│  ├─ ui                                             // UI test suites.
├─ .gitignore 
├─ package.json
├─ playwright.config.js
├─ README.md                                         // Guidelines

```

# IV. Usage
## 1. Run test

Run all tests
```bash
npx playwright test
```

Run tests in interactive UI mode, with a built-in watch mode (Preview)
```bash
npx playwright test --ui
```

Run a single test file
```bash
npx playwright test .\tests\ui\delete-book.spec.js
```

Run a set of test files
```bash
npx playwright test .\tests\ui
```

Run the test with the tag
```bash
npx playwright test --grep "@deletebook"
npx playwright test --grep (?=.*@deletebook)(?=.*@searchbook)"
```

Run all the tests against a specific project
```bash
npx playwright test --project=firefox
```

Disable parallelization
```bash
npx playwright test --workers=1
```
## 2. Generate Report
```bash
npx allure serve allure-results
```