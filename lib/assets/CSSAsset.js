const Asset = require('parcel-bundler/src/assets/CSSAsset')
const generateBundleName = require('../generateBundleName')

class CSSAsset extends Asset {
  generateBundleName() {
    // logger.info('generateBundleName:', this.type, this.name)
    return generateBundleName(this)
  }
}

module.exports = CSSAsset;
