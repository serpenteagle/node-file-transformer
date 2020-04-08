module.exports = function (data, args) {
  const edited = JSON.parse(data);
  edited.edited = true;

  return JSON.stringify(edited);
};
