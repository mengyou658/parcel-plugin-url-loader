const Asset = require('parcel-bundler/lib/assets/SASSAsset')
const generateBundleName = require('../generateBundleName')

class SASSAsset extends Asset {
  generateBundleName() {    return generateBundleName(this)  }
}

module.exports = SASSAsset;
