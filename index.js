var nodemon = require('nodemon');
var path = require('path');

var isProduction = process.env.NODE_ENV === 'production';

// We only want to run the workflow when not in production
if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment.
  var bundle = require('./bundler.js');
  bundle();

}

nodemon({
  execMap: {
    js: 'node'
  },
  script: path.join(__dirname, 'backend/server'),
  ignore: [],
  watch: !isProduction ? ['backend/*'] : false,
  ext: 'js'
}).on('restart', function() {
  console.log('Backend restarted!');
});
