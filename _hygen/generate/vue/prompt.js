module.exports = [
  {
    type: "list",
    name: "dir",
    message: "ディレクトリは？",
    choices: [
      "basics",
      "components",
      "containers",
      "pages",
      "layouts",
      "templates"
    ]
  },
  {
    type: "input",
    name: "name",
    message: "ファイル名は？"
  }
];
