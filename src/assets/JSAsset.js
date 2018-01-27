const Asset = require('parcel-bundler/lib/assets/JSAsset')
const generateBundleName = require('../generateBundleName')

class JSAsset extends Asset {
  generateBundleName() {
    // logger.info('JSAsset:', this)
    return generateBundleName(this)
  }
}

module.exports = JSAsset;
