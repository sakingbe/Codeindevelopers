const {src,dest, watch}=require('gulp');
const minifyjs = require('gulp-uglify');
const sourceMaps = require('gulp-sourcemaps');
const concat = require ('gulp-concat');
const jsfiles = ['./static/js/codeindevelopers.plugin.js', './static/js/lottie.js', './static/js/bootstrap.bundle.min.js', './static/js/coundown.js', './static/js/custom.js', './static/js/hero-script.js', './static/js/inviewscroll.js', './static/js/jquery.min.js', './static/js/noframework.waypoints.min.js', './static/js/particles.min.js', './static\js\portfolio.loadmore.js', './static/js/preloader.js', './static/js/progressbar.min.js', './static/js/rellax.min.js', './static/js/swiper.min.js','./static/js/theme.darkmode.js']
const bundlejs = () => {
    return src('./static/js/**/*.js')
    .pipe(sourceMaps.init())
    .pipe(minifyjs())
    .pipe(concat('bundle.js'))
    .pipe(sourceMaps.write())
    .pipe(dest('./dist/static/js'));

}
const devWatch = () => {
    watch('./static/js/**/*.js', bundlejs)
}
exports.bundlejs = bundlejs;
exports.devWatch = devWatch;