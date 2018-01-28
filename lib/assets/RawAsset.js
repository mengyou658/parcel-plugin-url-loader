const Asset = require('parcel-bundler/src/assets/RawAsset')
const generateBundleName = require('../generateBundleName')

class RawAsset extends Asset {
  generateBundleName() {    return generateBundleName(this)  }
}

module.exports = RawAsset;
