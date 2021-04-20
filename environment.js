function getEnvironmentVariable(oldKey, newKey) {
  let environmentVariable = process.env[newKey];

  if (environmentVariable !== undefined) {
    return environmentVariable;
  }

  environmentVariable = process.env[oldKey];

  if (environmentVariable !== undefined) {
    console.warn(
      `Using \`process.env.${oldKey}\` will be deprecated. Please set the value using \`process.env.${newKey}\`.`
    );
  }

  return environmentVariable;
}

function getHost() {
  return getEnvironmentVariable("NETWORK_URL", "TESTRAIL_ORIGIN");
}

function getPassword() {
  return getEnvironmentVariable("PASSWORD", "TESTRAIL_PASSWORD");
}

function getUsername() {
  return getEnvironmentVariable("USERNAME", "TESTRAIL_USERNAME");
}

module.exports = { getHost, getPassword, getUsername };
