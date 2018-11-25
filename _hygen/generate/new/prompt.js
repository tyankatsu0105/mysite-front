module.exports = [
  {
    type: "list",
    name: "dir",
    message: "ディレクトリは？",
    choices: ["components", "layouts", "pages", "templates"]
  },
  {
    type: "input",
    name: "name",
    message: "ファイル名は？"
  }
];
