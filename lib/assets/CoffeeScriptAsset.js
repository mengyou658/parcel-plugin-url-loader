const Asset = require('parcel-bundler/lib/assets/CoffeeScriptAsset')
const generateBundleName = require('../generateBundleName')

class CoffeeScriptAsset extends Asset {
  generateBundleName() {    return generateBundleName(this)  }
}

module.exports = CoffeeScriptAsset;
