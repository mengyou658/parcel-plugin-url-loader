
const SourceMapPackager = require('parcel-bundler/src/packagers/SourceMapPackager')
const fsExtra = require('parcel-bundler/src/utils/fs')
const path = require('path');

class MySourceMapPackager extends SourceMapPackager {

  async setup() {
    let dir = path.dirname(this.bundle.name)
    console.log('MySourceMapPackager:', dir, this.bundle.name)
    await fsExtra.mkdirp(dir);
    super.setup();
  }

}

module.exports = MySourceMapPackager;
