const Asset = require('parcel-bundler/src/assets/JSAsset')
const generateBundleName = require('../generateBundleName')

class JSAsset extends Asset {
  generateBundleName() {
    return generateBundleName(this)
  }
}

module.exports = JSAsset;
