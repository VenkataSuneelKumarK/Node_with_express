const path = require("path");

const rootDir = path.join(path.dirname(process.mainModule.filename), "src");

module.exports.rootDir = rootDir;
module.exports.getDirPath = folder => path.join(rootDir, folder);
