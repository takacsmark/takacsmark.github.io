'use strict';
const gulp = require('gulp');
//sass processing
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
//image optimization
const path = require('path');
const fs = require('fs');
const dirCompare = require('dir-compare');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');
const rename = require("gulp-rename");
const del = require('del');
const glob = require("glob")
const runSequence = require('run-sequence');

/**
 * Css processing
 */
gulp.task('sass', () => {
    const processors = [
	autoprefixer,
	cssnano
    ];

    return gulp.src('./scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(postcss(processors))
	.pipe(gulp.dest('./assets'));
});

/** Watch
 *
 */
gulp.task('watch', () => {
    gulp.watch('./scss/*.scss', gulp.series(['sass']));
});

/**
 * Image optimization
 *
 * Usage: add original files to the source folder, optimized images will be
 * copied to the destination folder
 *
 * tasks: img:cleanup       - remove images from the destination folder
 *        img:minimize      - minimize original images and add results to target folder
 *        img:generatesizes - generate sized versions of images in target folder
 *
 * source folder: assets/_raw_images
 * target folder: assets/images
 *
 * @warning - your original files cannot end in _[0-9]*
 */
const srcDir = 'assets/_raw_images';
const destDir = 'assets/images';

// Configuration object of responsive image sizes
// details of image design are described in docs/responsive-design.md
const responsiveImgGenConfig = [
    {
        src: srcDir + '/post-thumbs/*',
        widths: [960, 570, 300],
        dest: destDir + '/post-thumbs/'
    },
    {
        src: srcDir + '/site-greeting/*',
        widths: [1920, 960, 600],
        dest: destDir +'/site-greeting/'
    },
    {
        src: srcDir + '/in-content/*',
        widths: [750, 550, 370],
        dest: destDir + '/in-content/'
    },
];

gulp.task('default', () => {
    console.log('Use gulp img:add to add new images');
});

// Task for removing all images in destination folder
gulp.task('img:cleanup', ()=> {
    del(destDir + '/**')
})
// Task to copy and minimize original images from source dir to dest dir
// this task will only add new images and skips existing images
gulp.task('img:minimize', () => {
    let files = []
    // find the files that are present in the source dir but not in dest
    for(let entry of dirCompare.compareSync(srcDir, destDir).diffSet) {
        entry.state === 'left' ? files.push(entry.path1 + '/' + entry.name1) : null
    }

    console.log('Moving ' + files.length + ' new image(s).');

    return gulp.src(files, {base: srcDir })
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest(destDir))
});

// Task to generate various image sizes from originals based on the config object
// this task will generate missing images only
gulp.task('img:generatesizes', () => {

    const readFileList = new Promise( (resolve, reject) => {
        glob(destDir + '/**/!(*_[0-9]*).{png,gif,jpg,jpeg}', (err, files) => {
            if(!err){
                resolve(files)
            } else {
                reject(err)
            }
        })
    })

    const checkFileSizesExist = (file) => {
        return new Promise( (resolve, reject) => {
            fs.access(file[0], (err) => {
                if(err) {
                    resolve(file)
                } else {
                    resolve('OK')
                }
            })
        })
    }

    return readFileList.then((files) => {
        let fileList = []

        for(let file of files) {
            for(let config of responsiveImgGenConfig) {
                if(file.match(config.dest)) {
                    for(let width of config.widths){
                        // fileList.push('./' + path.parse(file).dir + '/' + path.parse(file).name + '_' + width.toString() + path.parse(file).ext)
                        fileList.push([
                            './' + path.parse(file).dir + '/' + path.parse(file).name + '_' + width.toString() + path.parse(file).ext,
                            file,
                            width,
                            config.dest
                        ])
                    }
                }
            }
        }

        return Promise.all(
            fileList.map(checkFileSizesExist)
        )
    }).catch((err) => {
        console.log('someting went wrong: ' + err)
    }).then( (results) => {

        const res = results.reduce( (missing, value) => {
            if(value !== 'OK') {
                missing.push(value)
            }

            return missing
        }, [])

        res.map((item) => {
            gulp.src(item[1])
                .pipe(imageResize({
                    width : item[2],
                    crop : false,
                    upscale : false
                }))
                .pipe(rename( (path) => {
                    path.basename += '_' + item[2].toString();
                }))
                .pipe(gulp.dest(item[3]));
        })

    }).catch((err) => {
        console.log('someting went wrong: ' + err)
    })
});

gulp.task('img:add', () => {
    runSequence('img:minimize', 'img:generatesizes');
});
