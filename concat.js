const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const filesES5 = [
    './dist/element/polyfills-es5.js',
    './dist/element/polyfill-webcomp-es5.js',
    './dist/element/scripts.js',
    './dist/element/main-es5.js'
  ];
  const filesES2015 = [
    './dist/element/polyfills-es2015.js',
    './dist/element/polyfill-webcomp.js',
    './dist/element/scripts.js',
    './dist/element/main-es2015.js'
  ];
  await fs.ensureDir('elements');
  await concat(filesES5, 'elements/moin-es5.js');
  await concat(filesES2015, 'elements/moin-es2015.js');
})();
