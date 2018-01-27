const Asset = require('parcel-bundler/lib/assets/GraphqlAsset')
const generateBundleName = require('../generateBundleName')

class GraphqlAsset extends Asset {
  generateBundleName() {    return generateBundleName(this)  }
}

module.exports = GraphqlAsset;
