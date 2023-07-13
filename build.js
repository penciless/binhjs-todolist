const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const modifyFile = require('gulp-modify-file');

const path = require('path');
const fs = require('fs');

fs.rm('build', { recursive: true }, function() {

    console.log('[NODE] Clean build directory: build/');

    // Build HTML (index.html)
    src('src/*.html')
    .pipe(dest('build/'));

    // Build root script (index.js)
    src('src/*.js')
    .pipe(dest('build/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('build/'));

    // Build CSS styles
    src('src/**/*.css')
    .pipe(uglifycss())
    .pipe(dest('build/'));

    // Build for UI components
    src('src/components/**/*.js')
    .pipe(modifyFile(
        function(content, filepath, filebinary) {
            var filename = path.basename(filepath, path.extname(filepath));
            return `Binh.component('${filename}', function() {\n${content}\n});`;
        })
    )
    .pipe(dest('build/components'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('build/components'));

    // Build for services
    src('src/services/**/*.js')
    .pipe(modifyFile(
        function(content, filepath, filebinary) {
            var filename = path.basename(filepath, path.extname(filepath));
            return `Binh.service('${filename}', function() {\n${content}\n});`;
        })
    )
    .pipe(dest('build/services'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('build/services'));

});

