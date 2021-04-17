const {src, dest, series, parallel, watch} = require('gulp');

const origin = 'src';
const destination = 'build';
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function html(cb) {
  src(`${origin}/**/*.html`).pipe(dest(destination));
  cb();
}

function css(cb) {
  src(`${origin}/css/style.scss`)
      .pipe(sass({
        outputStyle: 'compressed'
      }))

      .pipe(dest(`${destination}/css`));

  cb();
}

exports.default = series(parallel(html, css));
