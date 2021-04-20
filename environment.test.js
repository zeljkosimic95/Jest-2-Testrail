const faker = require("faker");
const { getHost, getPassword, getUsername } = require("./environment");

describe("getHost", function () {
  afterEach(function () {
    jest.resetAllMocks();
  });

  test("given no environment variable is set then undefined is returned", function () {
    const actual = getHost();

    expect(actual).toBeUndefined();
  });

  test("given NETWORK_URL is set then it is returned", () => {
    const fakeUrl = faker.internet.url();
    process.env.NETWORK_URL = fakeUrl;

    const actual = getHost();

    expect(actual).toBe(fakeUrl);
  });

  test("given NETWORK_URL is set then a deprecation warning is displayed", () => {
    const warnSpy = jest.spyOn(console, "warn");
    const fakeUrl = faker.internet.url();
    process.env.NETWORK_URL = fakeUrl;

    getHost();

    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy).toHaveBeenCalledWith(
      "Using `process.env.NETWORK_URL` will be deprecated. Please set the value using `process.env.TESTRAIL_ORIGIN`."
    );
  });

  test("given TESTRAIL_ORIGIN is set then it is returned", () => {
    const fakeUrl = faker.internet.url();
    process.env.TESTRAIL_ORIGIN = fakeUrl;

    const actual = getHost();

    expect(actual).toBe(fakeUrl);
  });

  test("given TESTRAIL_ORIGIN is set then a deprecation warning is not displayed", () => {
    const warnSpy = jest.spyOn(console, "warn");
    const fakeUrl = faker.internet.url();
    process.env.TESTRAIL_ORIGIN = fakeUrl;

    getHost();

    expect(warnSpy).not.toHaveBeenCalled();
  });
});

describe("getPassword", function () {
  afterEach(function () {
    jest.resetAllMocks();
  });

  test("given no environment variable is set then undefined is returned", function () {
    const actual = getPassword();

    expect(actual).toBeUndefined();
  });

  test("given PASSWORD is set then it is returned", () => {
    const fakePassword = faker.internet.password();
    process.env.PASSWORD = fakePassword;

    const actual = getPassword();

    expect(actual).toBe(fakePassword);
  });

  test("given PASSWORD is set then a deprecation warning is displayed", () => {
    const warnSpy = jest.spyOn(console, "warn");
    const fakePassword = faker.internet.password();
    process.env.PASSWORD = fakePassword;

    getPassword();

    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy).toHaveBeenCalledWith(
      "Using `process.env.PASSWORD` will be deprecated. Please set the value using `process.env.TESTRAIL_PASSWORD`."
    );
  });

  test("given TESTRAIL_PASSWORD is set then it is returned", () => {
    const fakePassword = faker.internet.password();
    process.env.TESTRAIL_PASSWORD = fakePassword;

    const actual = getPassword();

    expect(actual).toBe(fakePassword);
  });

  test("given TESTRAIL_PASSWORD is set then a deprecation warning is not displayed", () => {
    const warnSpy = jest.spyOn(console, "warn");
    const fakePassword = faker.internet.password();
    process.env.TESTRAIL_PASSWORD = fakePassword;

    getPassword();

    expect(warnSpy).not.toHaveBeenCalled();
  });
});

describe("getUsername", function () {
  afterEach(function () {
    jest.resetAllMocks();
  });

  test("given no environment variable is set then undefined is returned", function () {
    const actual = getUsername();

    expect(actual).toBeUndefined();
  });

  test("given USERNAME is set then it is returned", () => {
    const fakeUsername = faker.internet.userName();
    process.env.USERNAME = fakeUsername;

    const actual = getUsername();

    expect(actual).toBe(fakeUsername);
  });

  test("given USERNAME is set then a deprecation warning is displayed", () => {
    const warnSpy = jest.spyOn(console, "warn");
    const fakeUsername = faker.internet.userName();
    process.env.USERNAME = fakeUsername;

    getUsername();

    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy).toHaveBeenCalledWith(
      "Using `process.env.USERNAME` will be deprecated. Please set the value using `process.env.TESTRAIL_USERNAME`."
    );
  });

  test("given TESTRAIL_USERNAME is set then it is returned", () => {
    const fakeUsername = faker.internet.userName();
    process.env.TESTRAIL_USERNAME = fakeUsername;

    const actual = getUsername();

    expect(actual).toBe(fakeUsername);
  });

  test("given TESTRAIL_USERNAME is set then a deprecation warning is not displayed", () => {
    const warnSpy = jest.spyOn(console, "warn");
    const fakeUsername = faker.internet.userName();
    process.env.TESTRAIL_USERNAME = fakeUsername;

    getUsername();

    expect(warnSpy).not.toHaveBeenCalled();
  });
});
