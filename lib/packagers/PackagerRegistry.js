const JSPackager = require('./LoaderPackager');
const CSSPackager = require('./CSSPackager');
const HTMLPackager = require('./HTMLPackager');
const SourceMapPackager = require('./SourceMapPackager');
const RawPackager = require('./RawPackager');

class PackagerRegistry {
  constructor() {
    this.packagers = new Map();

    this.add('js', JSPackager);
    this.add('css', CSSPackager);
    this.add('html', HTMLPackager);
    this.add('map', SourceMapPackager);
  }

  add(type, packager) {
    if (typeof packager === 'string') {
      packager = require(packager);
    }

    this.packagers.set(type, packager);
  }

  has(type) {
    return this.packagers.has(type);
  }

  get(type) {
    let res = this.packagers.get(type) || RawPackager;
    console.log('get packager:', type)
    return res;
  }
}

module.exports = PackagerRegistry;