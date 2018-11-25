module.exports = {
  templates: `${__dirname}/_hygen`,
  helpers: {
    relative: (from, to) => path.relative(from, to),
    src: () => `${__dirname}/hoge`
  }
};
