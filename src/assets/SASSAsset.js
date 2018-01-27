const Asset = require('parcel-bundler/src/assets/SASSAsset')
const generateBundleName = require('../generateBundleName')

class SASSAsset extends Asset {
  generateBundleName() {    return generateBundleName.bind(this)()  }
}

module.exports = SASSAsset;
