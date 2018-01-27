const {getOptions} = require('./config')

async function Init(bundler) {
  const pluginOptions = await getOptions()
  try {
    bundler.options = Object.assign({}, bundler.options, {pluginOptions: pluginOptions})
    pluginOptions.exts.forEach(ext => {
      bundler.addAssetType(ext, require.resolve('./assets/ImageAsset.js'))
    })

    bundler.addAssetType('js', require.resolve('./assets/JSAsset.js'))
    bundler.addAssetType('jsx', require.resolve('./assets/JSAsset.js'))
    bundler.addAssetType('es6', require.resolve('./assets/JSAsset.js'))
    bundler.addAssetType('jsm', require.resolve('./assets/JSAsset.js'))
    bundler.addAssetType('mjs', require.resolve('./assets/JSAsset.js'))
    bundler.addAssetType('ml', require.resolve('./assets/ReasonAsset.js'))
    bundler.addAssetType('re', require.resolve('./assets/ReasonAsset.js'))
    bundler.addAssetType('ts', require.resolve('./assets/TypeScriptAsset.js'))
    bundler.addAssetType('tsx', require.resolve('./assets/TypeScriptAsset.js'))
    bundler.addAssetType('coffee', require.resolve('./assets/CoffeeScriptAsset.js'))
    bundler.addAssetType('json', require.resolve('./assets/JSONAsset.js'))
    bundler.addAssetType('yaml', require.resolve('./assets/YAMLAsset.js'))
    bundler.addAssetType('yml', require.resolve('./assets/YAMLAsset.js'))
    bundler.addAssetType('gql', require.resolve('./assets/GraphqlAsset.js'))
    bundler.addAssetType('graphql', require.resolve('./assets/GraphqlAsset.js'))

    bundler.addAssetType('css', require.resolve('./assets/CSSAsset.js'))
    bundler.addAssetType('pcss', require.resolve('./assets/CSSAsset.js'))
    bundler.addAssetType('styl', require.resolve('./assets/StylusAsset.js'))
    bundler.addAssetType('less', require.resolve('./assets/LESSAsset.js'))
    bundler.addAssetType('sass', require.resolve('./assets/SASSAsset.js'))
    bundler.addAssetType('scss', require.resolve('./assets/SASSAsset.js'))


    console.log('parser:', bundler.parser.extensions)
    bundler.addPackager('js', require.resolve('./packager.js'))
    console.log('packagers:', bundler.packagers.packagers)
  } catch (e) {
    console.log(e)
  }
}

module.exports = Init
