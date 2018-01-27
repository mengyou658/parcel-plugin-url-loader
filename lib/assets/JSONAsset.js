const Asset = require('parcel-bundler/lib/assets/JSONAsset')
const generateBundleName = require('../generateBundleName')

class JSONAsset extends Asset {
  generateBundleName() {    return generateBundleName(this)  }
}

module.exports = JSONAsset;
