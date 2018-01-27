const Asset = require('parcel-bundler/src/assets/YAMLAsset')
const generateBundleName = require('../generateBundleName')

class YAMLAsset extends Asset {
  generateBundleName() {    return generateBundleName.bind(this)()  }
}

module.exports = YAMLAsset;
