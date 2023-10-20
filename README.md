# snowflake-sdk-connect-test-cli
Simple CLI to test Snowflake connections using the Node snowflake-sdk

Installation:
`
npm install . -g
`
Name each parameter exactly the same as the option name as specified in the [Snowflake Node.js driver options reference](https://docs.snowflake.com/en/developer-guide/node-js/nodejs-driver).

Usage:

`
conn --account --username
`

Use single quotes around strings with special characters.


The list of parameters is specified below.

`
account - Snowflake account

username - Snowflake user

authenticator - SNOWFLAKE, EXTERNALBROWSER, https://<okta_account_name>.okta.com, OAUTH, SNOWFLAKE_JWT (optional)

password - Snowflake password (optional)

token - Oauth token (optional)

privateKey - Private key (in PEM format) for key pair authentication (optional)

privateKeyPath - Local path to the private key file (optional)

privateKeyPass - The passcode to decrypt the private key file (optional)

proxyHost - Snowflake proxy host (optional)

proxyPort - Snowflake proxy port (optional)

proxyUser - Snowflake proxy user (optional)

proxyPassword - Snowflake proxy password (optional)

proxyProtocol - Snowflake proxy protocol (http or https) (optional)

authenticator - Snowflake authentication type (optional)

accessUrl - Snowflake accessUrl (optional)
`

You're on your own to establish the proper permutations of parameters to establish a connection.
      
