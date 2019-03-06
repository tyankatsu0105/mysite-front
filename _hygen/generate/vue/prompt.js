module.exports = [
  {
    type: "select",
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
  },
  {
    type: "confirm",
    name: "hierarchy",
    message: "階層はある？"
  },
  {
    type: "input",
    name: "hierarchyName",
    message: "階層名は？",
    when: function(answers) {
      return answers.hierarchy;
    }
  }
];
