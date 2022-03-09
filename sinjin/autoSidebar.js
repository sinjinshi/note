// 自动生成目录
var sidebarTxt = '- [首页](/)\n';
var path = require('path');
var curPath = path.resolve('./');

function walkSync(currentDirPath, prefixBlank, callback) {
    var fs = require('fs'),
        path = require('path');
    fs.readdirSync(currentDirPath).forEach(function(name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && ".md" == path.extname(filePath).toLowerCase()) {
            sidebarTxt += prefixBlank;
            callback(filePath, stat);
        } else if (stat.isDirectory() && "images" != path.basename(filePath) && ".git" != path.basename(filePath)) {
            sidebarTxt += prefixBlank;
            callback(filePath, stat);
            walkSync(filePath, prefixBlank + '  ', callback);
        }
    });
}
walkSync(curPath, '', function(filePath, stat) {
    var relativeFilePath = filePath.substr(curPath.length - 7); //保留/sinjin
    relativeFilePath = relativeFilePath.toString().replace(/["\\"]/g, "/");
    if (stat.isDirectory()) {
        sidebarTxt += '- **' + path.basename(filePath) + '**\n';
    } else {
        sidebarTxt += '- [' + path.basename(filePath) + '](' + relativeFilePath + ')\n';
    }
});

var path = require('path');
var fs = require('fs');
console.log(sidebarTxt);
fs.writeFile(path.resolve('../') + '/_sidebar.md', sidebarTxt, function(err) {
    if (err) {
        console.error(err);
    }
});