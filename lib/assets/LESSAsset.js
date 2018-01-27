const Asset = require('parcel-bundler/lib/assets/LESSAsset')
const generateBundleName = require('../generateBundleName')

class LESSAsset extends Asset {
  generateBundleName() {    return generateBundleName(this)  }
}

module.exports = LESSAsset;
