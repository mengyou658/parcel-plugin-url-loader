
const HTMLPackager = require('parcel-bundler/src/packagers/HTMLPackager')
const fs = require('parcel-bundler/src/utils/fs')
const path = require('path');

class MyHTMLPackager extends HTMLPackager {

  async setup() {
    let dir = path.dirname(this.bundle.name)
    console.log('MyHTMLPackager:', dir, this.bundle.name)
    await fs.mkdirp(dir);
    super.setup();
  }

}

module.exports = MyHTMLPackager;
