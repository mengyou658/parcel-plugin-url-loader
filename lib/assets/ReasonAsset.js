const Asset = require('parcel-bundler/src/assets/ReasonAsset')
const generateBundleName = require('../generateBundleName')

class ReasonAsset extends Asset {
  generateBundleName() {    return generateBundleName(this)  }
}

module.exports = ReasonAsset;
