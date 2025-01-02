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

For every push or pull request a github action flow was already setup so the test tuns automatically.
all i need to do is edit the read me file and commit to master and the tests start running.
so there are 3 ithet test files but i set up i ly checkout 1-3 to run, the checkout_automation 1-3 wont run brcause i excluded it in the workflow
file. so lets commit this and push for book 2 update.
