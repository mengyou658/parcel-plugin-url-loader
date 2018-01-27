const Asset = require('parcel-bundler/src/assets/CoffeeScriptAsset')
const generateBundleName = require('../generateBundleName')

class CoffeeScriptAsset extends Asset {
  generateBundleName() {    return generateBundleName.bind(this)()  }
}

module.exports = CoffeeScriptAsset;
