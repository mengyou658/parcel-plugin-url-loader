const path = require('path');
const RawAsset = require('./assets/RawAsset');
const GlobAsset = require('./assets/GlobAsset');
const glob = require('glob');
const Parser = require('parcel-bundler/src/Parser')

class MyParser extends Parser{

  findParser(filename) {
    if (glob.hasMagic(filename)) {
      return GlobAsset;
    }

    let extension = path.extname(filename);
    let parser = this.extensions[extension] || RawAsset;
    if (typeof parser === 'string') {
      parser = this.extensions[extension] = require(parser);
    }

    return parser;
  }

}

module.exports = MyParser;
