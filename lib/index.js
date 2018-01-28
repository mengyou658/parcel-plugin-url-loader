const { getOptions } = require('./config')

async function Init (bundler) {
  const pluginsOption = await getOptions()

  bundler.options['pluginsOption'] = pluginsOption

  var PackagerRegistry = require('./packagers/PackagerRegistry.js')
  var Parser = require('./Parser.js')
  bundler.packagers = new PackagerRegistry()
  bundler.parser = new Parser(bundler.options)

  pluginsOption.exts.forEach(ext => {
    bundler.addAssetType(ext, require.resolve('./assets/ImageAsset.js'))
  })

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

  bundler.addPackager('css', require.resolve('./packagers/CSSPackager.js'))
  bundler.addPackager('js', require.resolve('./packagers/LoaderPackager.js'))
  bundler.addPackager('html', require.resolve('./packagers/HTMLPackager.js'))
  bundler.addPackager('map', require.resolve('./packagers/SourceMapPackager.js'))

  console.log('plugin:', bundler.packagers.packagers)
}

module.exports = Init
