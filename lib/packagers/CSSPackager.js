const CSSPackager = require('parcel-bundler/src/packagers/CSSPackager')
const fsExtra = require('parcel-bundler/src/utils/fs')
const path = require('path');

class MyCSSPackager extends CSSPackager {

  setup() {
    this.setupExtra();
    super.setup();
  }
  async setupExtra() {
    let dir = path.dirname(this.bundle.name)
    await fsExtra.mkdirp(dir);
    console.log('MyCSSPackager:', dir, this.bundle.name)
  }

}

module.exports = MyCSSPackager;
