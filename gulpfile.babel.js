require('babel-core/register');

var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant'); // $ npm i -D imagemin-pngquant
const imageResize = require('gulp-image-resize');
const path = require('path');
var rename = require("gulp-rename");
var del = require('del');

'use strict';

gulp.task('cleanup', ()=> {
    del('assets/images/**')
})

gulp.task('img:optimize', () => {
    return gulp.src('static/images/**')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('assets/images/'));
})


const responsiveImgGen = [
    {
        src: 'static/images/post-thumbs/*',
        widths: [960, 570, 300],
        dest: 'assets/images/post-thumbs/'
    },
    {
        src: 'static/images/site-greeting/*',
        widths: [1920, 960, 600],
        dest: 'assets/images/site-greeting/'        
    },
    {
        src: 'static/images/in-content/*',
        widths: [750, 550, 370],
        dest: 'assets/images/in-content/'        
    },
    
    
];

gulp.task('img:generatesizes:featured', () => {
    for (let config of responsiveImgGen) {
        for (let width of config.widths) {
            gulp.src(config.src)
                .pipe(imageResize({ 
                    width : width,
                    crop : false,
                    upscale : false
                }))
                .pipe(rename( (path) => {
                    path.basename += '_' + width.toString();
                }))
                .pipe(gulp.dest(config.dest));            
        }
    }
})

/** Only used for initial migration */
gulp.task('img:copy', () => {
    gulp.src('static/images/**')
        .pipe(gulp.dest('assets/images/'));    
})


