/* eslint no-restricted-syntax: 0 */
let originEnv = require("dotenv").config();
originEnv = originEnv.parsed;

function middleware(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "0" || value === 0) return 0;
  return value || null;
}

exports.getEnvs = () => {
  let env = {};
  for (let key in originEnv) {
    if (originEnv[key]) {
      env["process.env." + key] = JSON.stringify(middleware(originEnv[key]));
    }
  }
  return env;
};
