
const SourceMapPackager = require('parcel-bundler/src/packagers/SourceMapPackager')
const fsExtra = require('parcel-bundler/src/utils/fs')
const path = require('path');

class MySourceMapPackager extends SourceMapPackager {

  setup() {
    this.setupExtra();
    super.setup();
  }
  async setupExtra() {
    let dir = path.dirname(this.bundle.name)
    await fsExtra.mkdirp(dir);
    console.log('MySourceMapPackager:', dir, this.bundle.name)
  }

}

module.exports = MySourceMapPackager;
