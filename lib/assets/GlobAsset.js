const Asset = require('parcel-bundler/src/assets/GraphqlAsset')
const generateBundleName = require('../generateBundleName')

class GlobAsset extends Asset {
  generateBundleName() {    return generateBundleName(this)  }
}
module.exports = GlobAsset;
