const Asset = require('parcel-bundler/src/assets/JSONAsset')
const generateBundleName = require('../generateBundleName')

class JSONAsset extends Asset {
  generateBundleName() {    return generateBundleName.bind(this)()  }
}

module.exports = JSONAsset;
