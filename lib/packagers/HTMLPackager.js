
const HTMLPackager = require('parcel-bundler/src/packagers/HTMLPackager')
const urlJoin = require('parcel-bundler/src/utils/urlJoin')
const fsExtra = require('parcel-bundler/src/utils/fs')
const path = require('path');

class MyHTMLPackager extends HTMLPackager {

  setup() {
    this.setupExtra();
    super.setup();
  }

  async setupExtra() {
    let dir = path.dirname(this.bundle.name)
    await fsExtra.mkdirp(dir);
    console.log('MyHTMLPackager:', dir, this.bundle.name)
  }

  insertSiblingBundles(siblingBundles, tree) {
    let head = this.getHeadContent(tree);
    const {assets} = this.options.pluginsOption
    console.log('html', assets)
    for (let bundle of siblingBundles) {
      if (bundle.type === 'css') {
        head.content.push({
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: urlJoin(this.options.publicURL, assets['css'] + path.basename(bundle.name))
          }
        });
      } else if (bundle.type === 'js') {
        head.content.push({
          tag: 'script',
          attrs: {
            src: urlJoin(this.options.publicURL, assets['js'] + path.basename(bundle.name))
          }
        });
      }
    }
  }

}

module.exports = MyHTMLPackager;
