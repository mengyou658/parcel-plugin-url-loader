const path = require('path');
const md5 = require('parcel-bundler/src/utils/md5')
const sanitizeFilename = require('sanitize-filename');

var generateBundleName = (target) => {
  // Resolve the main file of the package.json
  let main =
    target.package && target.package.main
      ? path.resolve(path.dirname(target.package.pkgfile), target.package.main)
      : null;
  let ext = '.' + target.type;

  // If target asset is main file of the package, use the sanitized package name
  if (target.name === main) {
    const packageName = sanitizeFilename(target.package.name, {
      replacement: '-'
    });
    console.log('packageName:', packageName, target.type, target.name)
    return packageName + ext;
  }

  // If target is the entry point of the root bundle, use the original filename
  if (target.name === target.options.mainFile) {
    console.log('basename:', target.type, target.name)
    return path.basename(target.name, path.extname(target.name)) + ext;
  }

  // Otherwise generate a unique name
  var res = md5(target.name) + ext;
  const {assets} = target.options.pluginsOption
  if (assets && assets[target.type]) {
    res = assets[target.type] + res
  } else if (assets && assets['default']) {
    res = assets['default'] + res
  }
  console.log('generateBundleName:', res, target.name)
  return res;
}


module.exports = generateBundleName
