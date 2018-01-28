const CSSPackager = require('parcel-bundler/src/packagers/CSSPackager')
const fs = require('parcel-bundler/src/utils/fs')
const path = require('path');

class MyCSSPackager extends CSSPackager {

  async setup() {
    let dir = path.dirname(this.bundle.name)
    console.log('MyCSSPackager:', dir, this.bundle.name)
    await fs.mkdirp(dir);
    super.setup();
  }

}

module.exports = MyCSSPackager;
