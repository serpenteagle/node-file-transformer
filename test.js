const fs = require("fs");

module.exports = function (target, args) {
  const data = fs.readFileSync(target);
  data.edited = true;

  return JSON.parse(data);
};
