var fs = require('fs');
var images = require('images');
var path = require('path');

// set watermark file
var watermarkImg = images(path.join(__dirname, 'watermark/yes.png'));

// set source file folder
var source = path.join(__dirname, 'src');
// set dest file folder
var savePath = path.join(__dirname, 'dst');

var wmWidth = watermarkImg.width();
var wmHeight = watermarkImg.height();

var files = fs.readdirSync(source);
console.info(files);


function process(file) {
    var sourceImg = images(path.join(source, file));
    var sWidth = sourceImg.width();
    var sHeight = sourceImg.height();

    images(sourceImg)
    // set paint position 10px
    .draw(watermarkImg, sWidth - wmWidth - 10, sHeight - wmHeight - 10)
    // save
    .save(path.join(savePath, file));
}

files.map(function(f) {
    process(f);
});
