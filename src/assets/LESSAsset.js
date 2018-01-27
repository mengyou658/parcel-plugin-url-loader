const Asset = require('parcel-bundler/src/assets/LESSAsset')
const generateBundleName = require('../generateBundleName')

class LESSAsset extends Asset {
  generateBundleName() {    return generateBundleName.bind(this)()  }
}

module.exports = LESSAsset;
