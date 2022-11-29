// gulpfile.js

// Gulp File


// Folders

const srcFolder = './src';
const distFolder = './dist';


// Packages

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del');
const gulpFileInclude = require('gulp-file-include');
const gulpSass = require('gulp-sass')(require('sass'));
// const gulpConcat = require('gulp-concat');
const gulpAutoprefixer = require('gulp-autoprefixer');
const gulpGroupCSSMediaQueries = require('gulp-group-css-media-queries');
const gulpCleanCSS = require('gulp-clean-css');
const gulpBabel = require('gulp-babel');
const gulpUglify = require('gulp-uglify');
const gulpRename = require('gulp-rename');
const gulpImagemin = require('gulp-imagemin');
const gulpSVGO =  require('gulp-svgo');
const gulpSVGStore = require('gulp-svgstore');
const gulpTTFtoWOFF = require('gulp-ttf2woff');
const gulpTTFtoWOFF2 = require('gulp-ttf2woff2');


// Synchronization

const synchronization = () => {
    browserSync.init({
        server: {
            baseDir: distFolder,
        },
        notify: false,
    });
};


// Cleaning

const cleaning = () => {
    return del(distFolder);
};


// Markup

const markup = () => {
    return gulp.src([
        srcFolder + '/*.html',
    ])
    .pipe(gulpFileInclude())
    .pipe(gulp.dest(distFolder + '/'))
    .pipe(browserSync.stream());
};


// Styles

// const styles = () => {
//     return gulp.src([
//         srcFolder + '/styles/fonts.scss',
//         srcFolder + '/styles/reset.scss',
//         srcFolder + '/styles/params.scss',
//         srcFolder + '/styles/plugins/*.scss',
//         srcFolder + '/styles/blocks/*.scss',
//         srcFolder + '/styles/style.scss',
//     ])
//     .pipe(gulpConcat('style.min.css'))
//     .pipe(gulpSass())
//     .pipe(gulpAutoprefixer({
//         overrideBrowserslist:  ['last 5 versions'],
//         cascade: true,
//     }))
//     .pipe(gulpGroupCSSMediaQueries())
//     .pipe(gulpCleanCSS())
//     .pipe(gulp.dest(distFolder + '/styles/'))
//     .pipe(browserSync.stream());
// };

const styles = () => {
   return gulp.src([
       srcFolder + '/styles/style.scss',
   ])
   .pipe(gulpSass())
   .pipe(gulpAutoprefixer({
       overrideBrowserslist:  ['last 5 versions'],
       cascade: true,
   }))
   .pipe(gulpGroupCSSMediaQueries())
   .pipe(gulpCleanCSS())
   .pipe(gulpRename('style.min.css'))
   .pipe(gulp.dest(distFolder + '/styles/'))
   .pipe(browserSync.stream());
};


// Scripts

const scripts = () => {
   return gulp.src([
       srcFolder + '/scripts/script.js',
   ])
   .pipe(gulpFileInclude())
   .pipe(gulpBabel({
       presets: ['@babel/env'],
   }))
   .pipe(gulpUglify())
   .pipe(gulpRename('script.min.js'))
   .pipe(gulp.dest(distFolder + '/scripts/'))
   .pipe(browserSync.stream());
};

// Images

const images = () => {
    return gulp.src([
        srcFolder + '/images/**/*.{jpeg,jpg,png,gif,svg,ico}',
    ])
    .pipe(
        gulpImagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 3,
        })
    )
    .pipe(gulp.dest(distFolder + '/images/'))
    .pipe(browserSync.stream());
};


// Icons

const icons = () => {
    return gulp.src([
        srcFolder + '/svg-sprite/svg-icons/*.svg',
    ])
    .pipe(gulpSVGO({
        plugins: [
            {
                removeViewBox: false,
            },
            {
                sortAttrs: true,
            },
            {
                sortDefsChildren: true,
            },
            {
                removeDimensions: true,
            },
            {
                removeStyleElement: true,
            },
            {
                removeScriptElement: true,
            },
            {
                removeAttrs: {
                    attrs: '(class|style|stroke|fill)',
                },
            },
        ],
    }))
    .pipe(gulpSVGStore({
        inlineSvg: true,
    }))
    .pipe(gulp.dest(srcFolder + '/svg-sprite/'))
    .pipe(browserSync.stream());
};


// SVG Sprite

const svgSprite = () => {
    return gulp.src([
        srcFolder + '/svg-sprite/svg-sprite.svg',
    ])
    .pipe(gulp.dest(distFolder + '/svg-sprite/'))
    .pipe(browserSync.stream());
};


// Fonts

const fonts = () => {
    gulp.src([
        srcFolder + '/fonts/**.*.ttf',
    ])
    .pipe(gulpTTFtoWOFF())
    .pipe(gulp.dest(distFolder + '/fonts/'))
    return gulp.src([
        srcFolder + '/fonts/**/*.ttf',
    ])
    .pipe(gulpTTFtoWOFF2())
    .pipe(gulp.dest(distFolder + '/fonts/'))
    .pipe(browserSync.stream());
};


// Files

const files = () => {
    gulp.src([
        srcFolder + '/files/**/*.*',
    ])
    .pipe(gulp.dest(distFolder + '/files/'))
    .pipe(browserSync.stream());
};


// Watching

const watching = () => {
    gulp.watch([srcFolder + '/*.html'], markup);
    gulp.watch([srcFolder + '/styles/**/*.scss'], styles);
    gulp.watch([srcFolder + '/scripts/**/*.js'], scripts);
    gulp.watch([srcFolder + '/images/**/*.{jpeg,jpg,png,gif,svg,ico}'], images);
    gulp.watch([srcFolder + '/svg-sprite/svg-icons/*.svg'], icons);
    gulp.watch([srcFolder + '/svg-sprite/svg-sprite.svg'], svgSprite);
    gulp.watch([srcFolder + '/fonts/**/*.ttf'], fonts);
    gulp.watch([srcFolder + '/files/**/*.*'], files);
};


// Default

exports.default = gulp.parallel(synchronization, watching, gulp.series(cleaning, markup, styles, scripts, images, icons, svgSprite, fonts, files));