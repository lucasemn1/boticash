const dotenv = require("dotenv");
dotenv.config({
  path: ".env",
})

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};