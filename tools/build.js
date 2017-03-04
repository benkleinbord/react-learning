/**
 * Created by ben.kl on 3/2/2017.
 */

//More info WebPack;s node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.

/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production' //this assure the Babel dev config (for hot reloading) dosn't applay.

console.log('Generating minified bundle for production via webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if(err){  //so a fatal error occurred. Stop here.
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = state.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if(jsonStats.hasWarnings){
    console.log('webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log('webpack stats:' + stats);

  // if we got this far, the build succeeded.
  console.log('Your app has been compiled in production mode and written to /dist. its ready to roll'.green);
  return 0;
});
