const Asset = require('parcel-bundler/src/assets/TypeScriptAsset')
const generateBundleName = require('../generateBundleName')

class TypeScriptAsset extends Asset {
  generateBundleName() {    return generateBundleName.bind(this)()  }
}

module.exports = TypeScriptAsset;
