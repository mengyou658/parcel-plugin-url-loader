const {getOptions} = require('./config')
const log4js = require('log4js');


module.exports = function (bundler) {
  try {
    const pluginOptions = await getOptions()
    log4js.configure({
      appenders: { cheese: { type: 'file', filename: 'logs.log' } },
      categories: { default: { appenders: ['cheese'], level: 'debug' } }
    });

    const logger = log4js.getLogger('cheese');

    bundler.options = Object.assign({}, bundler.options, {pluginOptions: pluginOptions, logger: logger})
    pluginOptions.exts.forEach(ext => {
      bundler.addAssetType(ext, require.resolve('./assets/ImageAsset.js'))
    })
    logger.info('pluginOptions:', bundler.parser.extensions)

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


    logger.info('pluginOptions:', bundler.parser.extensions)
    bundler.addPackager('js', require.resolve('./packager.js'))
    logger.info('pluginOptions:', bundler.packagers.packagers)
  } catch (e) {
    const logger = log4js.getLogger('cheese');
    logger.error(e)
  }
};
