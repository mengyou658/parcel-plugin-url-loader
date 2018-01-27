const path = require('path');
const md5 = require('parcel-bundler/src/utils/md5')
const sanitizeFilename = require('sanitize-filename');

var generateBundleName = () => {
  // Resolve the main file of the package.json
  console.log('generateBundleName:')
  let main =
    this.package && this.package.main
      ? path.resolve(path.dirname(this.package.pkgfile), this.package.main)
      : null;
  let ext = '.' + this.type;

  // If this asset is main file of the package, use the sanitized package name
  if (this.name === main) {
    const packageName = sanitizeFilename(this.package.name, {
      replacement: '-'
    });
    return packageName + ext;
  }

  // If this is the entry point of the root bundle, use the original filename
  if (this.name === this.options.mainFile) {
    return path.basename(this.name, path.extname(this.name)) + ext;
  }

  // Otherwise generate a unique name
  var res = md5(this.name) + ext;
  const {assets} = this.options.pluginsOption
  if (assets && assets[this.type]) {
    res = assets[this.type] + res
  } else if (assets && assets['default']) {
    res = assets['default'] + res
  }
  return res;
}


module.exports = generateBundleName
