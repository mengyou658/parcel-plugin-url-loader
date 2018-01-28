const RawPackager = require('parcel-bundler/src/packagers/RawPackager')
const fsExtra = require('parcel-bundler/src/utils/fs')
const fs = require('fs');
const path = require('path');
const url = require('url');

class MyRawPackager extends RawPackager {
  // Override so we don't create a file for this bundle.
  // Each asset will be emitted as a separate file instead.
  setup() {}

  async addAsset(asset) {
    // Use the bundle name if this is the entry asset, otherwise generate one.
    let name = this.bundle.name;
    if (asset !== this.bundle.entryAsset) {
      name = url.resolve(
        path.join(path.dirname(this.bundle.name), asset.generateBundleName()),
        ''
      );
    }

    let contents = asset.generated[asset.type];
    if (!contents || (contents && contents.path)) {
      contents = await fs.readFile(contents ? contents.path : asset.name);
    }
    let dir = path.dirname(name)
    console.log('MyRawPackager:', dir, this.bundle.name)
    await fsExtra.mkdirp(dir);
    await fs.writeFile(name, contents);
  }

  end() {}
}

module.exports = MyRawPackager;
