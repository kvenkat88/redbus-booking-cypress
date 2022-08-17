
## Cypress End to End Automation Framework

    This framework was built with intension anyone who wants to integrate javascript(used)/typescript and cypress framework in their organization it should be easy for them.

## Requirements

    - Any computer: Mac, Windows, Linux

    - git

## How to Start

    - git clone git@github.com:cypress-io/testing-workshop-cypress.git

    - cd testing-workshop-cypress

    - npm install

    - There are a lot dependencies that are not updated frequently in parallel with cypress. So while installing if you are seeing     conflicts usenpm i --force.

## Features of this Framework

    - Cypress Javascript Integration

    - Environment Configured

    - Mocha HTML Results ready

    - JUnit XML Results Ready

    - Test Suite Configured

    - Test Flags/tags for filtering - https://github.com/cypress-io/cypress-grep

## Project structure

    .
    ├── cypress
    │   ├── fixtures
    │   │   ├── login.json
    │   │   └── ...
    │   ├── e2e
    │   │   ├── homepage.spec.js
    │   │   ├── login.spec.js
    │   │   └── ...
    │   ├── page-objects
    │   │   ├── BasePage.js
    │   │   ├── HomePage.js
    │   │   ├── LoginPage.js
    │   │   └── ...
    |   ├── locators
    |   |   ├── BasePage.locator.js
    |   |   ├── LoginPage.locator.js
    │   ├── plugins
    │   │   ├── index.js
    │   │   └── ...
    │   └── support
    │      ├── utils
    │      │   ├── Utils.js
    │      │   └── ...
    │      ├── commands.js
    │      ├── index.js
    │      └── ...
    ├── package.json
    └── cypress.json

## Cypress References

    - https://github.com/alapanme/Cypress-Automation

    - https://github.com/wizeline/Cypress-Framework

    - https://github.com/cypress-io/cypress-example-kitchensink

    - https://github.com/cypress-io/testing-workshop-cypress

    - https://github.com/ganeshsirsi/CypressTypeScript

    - https://github.com/cypress-io/cypress-grep

    - https://glebbahmutov.com/blog/cypress-grep-filters/

    - https://www.cypress.io/blog/2018/02/05/when-can-the-test-start/
    
    - https://glebbahmutov.com/blog/cypress-should-callback/  - Should gives promise

    - https://www.lambdatest.com/blog/fill-and-submit-forms-in-cypress/

    
