const Asset = require('parcel-bundler/src/assets/ReasonAsset')
const generateBundleName = require('../generateBundleName')

class ReasonAsset extends Asset {
  generateBundleName() {    return generateBundleName.bind(this)()  }
}

module.exports = ReasonAsset;
