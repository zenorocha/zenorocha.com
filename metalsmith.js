const start = process.hrtime();
const task  = process.argv[2];

/* Dependencies
   ========================================================================== */

const config     = require('./config');
const chalk      = require('chalk');
const ghpages    = require('gh-pages');
const path       = require('path');
const plugins    = require('load-metalsmith-plugins')();
const prettytime = require('pretty-hrtime');
const metalsmith = require('metalsmith')(__dirname);

/* Pipeline
   ========================================================================== */

metalsmith
  .source(config.source)
  .destination(config.destination)
  .use(plugins.assets(config.assets))
  .use(plugins.filemetadata(config.filemetadata))
  .use(plugins.slug())
  .use(plugins.dateInFilename())
  .use(plugins.collections(config.collections))
  .use(plugins.dateFormatter(config.dateFormatter))
  .use(plugins.metallic())
  .use(plugins.markdown())
  .use(plugins.permalinks(config.permalinks))
  .use(plugins.layouts(config.layouts))
  .use(plugins.inPlace(config.inPlace));

if (task === 'watch') {
  metalsmith
    .use(plugins.serve(config.serve))
    .use(plugins.watch(config.watch));
}

/* Generate
   ========================================================================== */

metalsmith.build((err) => {
  if (err) throw err;
  else buildCompleted();
});

const buildCompleted = () => {
  if (task === 'build') {
    buildDuration();
  }

  if (task === 'deploy') {
    ghpages.publish(path.join(__dirname, config.destination), {
      branch: 'gh-pages',
      repo: 'https://github.com/zenorocha/zenorocha.com.git',
      logger: function(message) {
        console.log(message);
      }
    }, (err) => {
      if (err) throw err;
      else buildDuration();
    });
  }
}

const buildDuration = () => {
  const end = prettytime(process.hrtime(start));
  console.log(`> done in ${chalk.green(end)}`);
}