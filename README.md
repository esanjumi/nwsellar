# Playwright Test Automation Project

This project automates the checkout process for a web application using [Playwright](https://playwright.dev/). The tests are designed to simulate real-world scenarios, running in parallel or sequentially for multiple test files.  

---

## Features

- **Automated checkout** with randomly generated names and emails.  
- **Parallel execution** for efficient test coverage.  
- Seamless integration with **GitHub Actions** for continuous testing.  

---

## Prerequisites

Before running the tests, make sure you have the following installed:  

1. [Node.js](https://nodejs.org/) (v18 or later)  
2. [Playwright](https://playwright.dev/)  
3. Git installed and configured for version control.  

---

## Setup and Installation

Follow these steps to set up and run the project:  

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/esanjumi/nwsellar.git
   cd nwsellar

install dependencies: npm install

install playwright browsers: npx playwright install

project structure:

nwsellar/
├── tests/                  # Contains all test files
│   ├── checkout.spec.js
│   ├── checkout2.spec.js
│   ├── checkout3.spec.js
├── .github/workflows/      # CI/CD workflows
│   └── playwright.yml
├── node_modules/           # Project dependencies
├── .gitignore              # Ignored files and directories
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation

This is a test project and codes where written by william iyomere

