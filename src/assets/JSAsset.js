const Asset = require('parcel-bundler/src/assets/JSAsset')
const generateBundleName = require('../generateBundleName')

class JSAsset extends Asset {
  generateBundleName() {
    // logger.info('JSAsset:', this)
    return generateBundleName.bind(this)()
  }
}

module.exports = JSAsset;
