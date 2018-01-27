const Asset = require('parcel-bundler/src/assets/StylusAsset')
const generateBundleName = require('../generateBundleName')

class StylusAsset extends Asset {
  generateBundleName() {    return generateBundleName.bind(this)()  }
}

module.exports = StylusAsset;
