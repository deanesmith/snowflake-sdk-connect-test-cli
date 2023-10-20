#! /usr/bin/env node
const yargs = require("yargs");
const snowflake = require('snowflake-sdk');
const optionConfig = {
      "account": { describe: "Snowflake account", type: "string", demandOption: true },
      "username": { describe: "Snowflake user", type: "string", demandOption: true },
      "password": { describe: "Snowflake password", type: "string", demandOption: true },
      "proxyHost": { describe: "Snowflake proxy host", type: "string", demandOption: false },
      "proxyPort": { describe: "Snowflake proxy port", type: "number", demandOption: false },
      "proxyUser": { describe: "Snowflake proxy user", type: "string", demandOption: false },
      "proxyPassword": { describe: "Snowflake proxy password", type: "string", demandOption: false },
      "proxyProtocol": { describe: "Snowflake proxy protocol (http or https)", type: "string", demandOption: false },
      "authenticator": { describe: "Snowflake authentication type", type: "string", demandOption: false },
      "token": { describe: "Snowflake oauth token", type: "string", demandOption: false },
      "accessUrl": { describe: "Snowflake accessUrl", type: "string", demandOption: false },
};

const usage = "\nUsage: conn <options>";
const yargsConfig = yargs
      .usage(usage)
      .options(optionConfig)
      .argv;

let snowflakeConfig = {};

for (option in optionConfig) {

      let optionValue = yargs.argv[option];

      if (optionValue !== undefined) {

            if (optionConfig[option].type === 'string') {
                  
                  optionValue = optionValue.trim();

                  if (option.indexOf("password") >= 0) {
                        optionValue = optionValue.replace("'", "");
                  }
            }

            snowflakeConfig[option] = optionValue;
      }
}

console.log(snowflakeConfig);

const connection = snowflake.createConnection(snowflakeConfig);

connection.connect( 
      function(err, conn) {
            if (err) {
                  console.error('Unable to connect: ' + err.message);
            } else {
                  console.log('Successfully connected to Snowflake.');
                  connection_ID = conn.getId();
                  connection.destroy(function(err, conn) {
                        if (err) {
                              console.error('Unable to disconnect: ' + err.message);
                        } else {
                              console.log('Disconnected connection with id: ' + connection_ID);
                        }
                  });
            }
      }
);
