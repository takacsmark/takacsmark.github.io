/**
 * This is the Gulp automation file for takacsmark.com
 */
require('babel-core/register');

var gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const dirCompare = require('dir-compare');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var del = require('del');
var debug = require('gulp-debug');
var glob = require("glob")

'use strict';
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
 * source folder: static/images
 * target folder: assets/images
 *
 * @warning - your original files cannot end in _[0-9]*
 */
const srcDir = 'static/images'
const destDir = 'assets/images'

// Configuration object of responsive image sizes
// details of image design are described in docs/responsive-design.md
const responsiveImgGenConfig = [
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

    console.log('Moving ' + files.length + ' new image(s).')

    return gulp.src(files, {base: 'static/images/'})
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
        .pipe(gulp.dest('assets/images/'))
})

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

    readFileList.then((files) => {
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

        // console.log(fileList)

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

        // console.log(res)

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
})
