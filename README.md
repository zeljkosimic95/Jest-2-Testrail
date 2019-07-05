[![TestRail v4.1](https://img.shields.io/badge/TestRail%20API-v2-green.svg)](http://docs.gurock.com/testrail-api2/start)

# Jest2TestRail

This package allows you to use [Jest](https://jestjs.io/) in conjunction with [TestRail](http://www.gurock.com/testrail/).

- It can automatically create a new test run on TestRail.
- It can automatically send test results to TestRail - after they've been run.

(This package is based on a similar reporter for Protractor - [Jasmine 2 testrail](https://www.npmjs.com/package/jasmine-2-testrail))

## Install

```code
npm i jest-2-testrail
```

## Example - **jest-config.js**

The Reporter must be specified in the jest-config.js file, under 'reporters'.
<br>This file should be created in your project's root folder.
<br>Parameters are defined as 'project_id', which is the id of your project on TestRail,
<br>and 'suite_id', which is the id of the suite that should be included in the test run.

```javascript
module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testEnvironment: "node",
  testRegex: ".test.ts$",
  transform: { "^.+\\.(t|j)s$": "ts-jest" },
  reporters: [
    "default",
    ["jest-2-testrail", { project_id: "1", suite_id: "1" }]
  ]
};
```

## Example - tests

The Case ID from TestRail must be added to the start of each _it()_ description, <br>and separated from the test name by a colon - ":".

```javascript
describe("Login Page", () => {
  // "1:" this is Case ID from Test Rail
  it("1: Login success", async () => {
    expect(1).toBe(1);
  });

  it("2: Login fail", async () => {
    expect(1).toBe(0);
  });

  xit("3: Registration", async () => {
    expect(1).toBe(1);
  });
});
```

**Note:** The Case ID is a unique and permanent ID of every test case (e.g. C125),
<br>and shoudn't be confused with a Test Case ID, which is assigned to a test case<br> when a new run is created (e.g. T325).

## Example - **.env** file

This file needs to be created in your project's root folder.
<br> It must contain the URL of your TestRail, username (email address) and password (or API key).
<br> This file needs to have all 3 parameters correctly filled.

```javascript
NETWORK_URL = https://<YourProjectURL>.testrail.io
USERNAME = email address
PASSWORD = password or API key
```

## Enable TestRail API

In order to use TestRail API, it needs to be enabled by an administrator
<br>in your own TestRail Site Settings.
Also if you want to use API authentication instead of your password,
<br>enable session authentication for API in the TestRail Site Settings,
<br>and add an API key in your User settings _(This is recommended)_.

## Authors

| [<img src="https://avatars.githubusercontent.com/Slobo989" width="100px;"/><br /><sub><b>Slobodan Dušanić</b></sub>](https://github.com/Slobo989) | [<img src="https://avatars.githubusercontent.com/zeljkosimic95" width="100px;"/><br /><sub><b>Željko Simić</b></sub>](https://www.github.com/zeljkosimic95) |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |


## Special thanks

| [<img src="https://avatars.githubusercontent.com/markoarsenal" width="100px;"/><br /><sub><b>Marko Rajević</b></sub>](https://github.com/markoarsenal) | [<img src="https://avatars.githubusercontent.com/phpoenix" width="100px;"/><br /><sub><b>Bogdan Petković</b></sub>](https://www.github.com/phpoenix) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
