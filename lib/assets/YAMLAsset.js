const Asset = require('parcel-bundler/lib/assets/YAMLAsset')
const generateBundleName = require('../generateBundleName')

class YAMLAsset extends Asset {
  generateBundleName() {    return generateBundleName(this)  }
}

module.exports = YAMLAsset;
