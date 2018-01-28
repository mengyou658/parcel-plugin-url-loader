const url = require('url')
const { basename, extname, parse, join, dirname } = require('path')
const JSPackager = require('parcel-bundler/src/packagers/JSPackager')
const promisify = require('parcel-bundler/src/utils/promisify')
const { read, write } = require('../utils')
const { getOptions } = require('../config')
const path = require('path');
const fsExtra = require('parcel-bundler/src/utils/fs')
const fs = require('fs');

class LoaderPackager extends JSPackager {

  setup() {
    this.setupExtra();
    super.setup();
  }

  async setupExtra() {
    let dir = path.dirname(this.bundle.name)
    await fsExtra.mkdirp(dir);
    console.log('LoaderPackager:', dir, this.bundle.name)
  }

}

module.exports = LoaderPackager
