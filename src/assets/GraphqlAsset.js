const Asset = require('parcel-bundler/src/assets/GraphqlAsset')
const generateBundleName = require('../generateBundleName')

class GraphqlAsset extends Asset {
  generateBundleName() {    return generateBundleName.bind(this)()  }
}

module.exports = GraphqlAsset;
