# M8tro Bootstrap Theme

[![GitHub version](https://badge.fury.io/gh/idleberg%2Fm8tro-bootstrap.svg)](http://badge.fury.io/gh/idleberg%2Fm8tro-bootstrap) [![Build Status](https://secure.travis-ci.org/idleberg/m8tro-bootstrap.svg)](http://travis-ci.org/idleberg/m8tro-bootstrap) [![devDependencies](https://david-dm.org/idleberg/m8tro-bootstrap/dev-status.svg)](https://david-dm.org/idleberg/m8tro-bootstrap#info=devDependencies)

*This is work in progress*

Bootstrap theme inspired by Windows Phone's [Modern UI](http://msdn.microsoft.com/en-us/library/windows/apps/dn465800.aspx) (aka “Metro”).

*Watch a [live demo](http://idleberg.github.io/m8tro-bootstrap/)!*

## Fonts

This theme was created with Modern UI's [Segoe](http://www.microsoft.com/typography/fonts/family.aspx?FID=331) font-family in mind. While this commercial font is largely available on the Windows platform (Vista and later, Windows Phone), fallback fonts are required for other platforms. 

Font | Platform
-----|---------
[Segoe UI](http://www.microsoft.com/typography/fonts/family.aspx?FID=331)         | Windows Vista (or later), Windows Phone 7 (or later)
[Roboto Condensed](http://www.google.com/fonts/specimen/Roboto+Condensed) | Android, Web font (optional)
[Fira Sans](http://mozilla.github.io/Fira/)        | Firefox OS, Web font ([optional](http://www.google.com/fonts/specimen/Fira+Sans))
[Neue Helvetica](http://www.linotype.com/1266/neuehelvetica-family.html)   | iOS, Mac OS X

Should you prefer a more consistent font behaviour, [Lato](https://www.google.com/fonts#UsePlace:use/Collection:Lato) on Google Fonts is a recommended alternative.

## Installation

Style-sheets are meant to be used instead of `bootstrap.min.css`, there's no need to include both files.

### Bower

Pre-compiled CSS files can be installed using [Bower](http://bower.io/)

    bower install m8tro-bootstrap

### Manual Installation

Use the style-sheets from a [release](https://github.com/idleberg/m8tro-bootstrap/releases) or get the latest development version of [m8tro.min.css](https://raw.githubusercontent.com/idleberg/m8tro-bootstrap/master/dist/css/m8tro.min.css).

### CDN

There is currently no officially supported CDN. Also, it is [not advised](http://stackoverflow.com/a/5503156/1329116) to embed a link to the raw file hosted on GitHub, since it increases your page's load time.

## Developers

### Gulp task

The provided `gulpfile.js` will serve as our primary build tool. In order to use it, we need to have [Node.js](http://nodejs.org/download/) and [Bower](http://bower.io/) installed.

```bash
# install Bower and Gulp globally
npm install bower gulp -g

# install Node dependencies
npm install
```

Several gulp tasks are now available. Use `gulp make` to build the style sheet or make use of the `gulp lint` feature. You can also lint files by extensions (`gulp css`, `gulp js` & `gulp html`.)

### Bash script

1. Clone the repository `git clone https://github.com/idleberg/m8tro-bootstrap.git`
2. Install [Less](http://lesscss.org/) compiler `npm install less -g`
3. Edit any of the files in the *src*-folder
4. Run `./m8ke` (or `./m8ke theme`) to run the [LESS](http://lesscss.org/) compiler

That last step will also install all required [Bower](http://bower.io/) components, the equivalent of a manually typed `bower install`.

## Customize

This repository includes templates for Chris Kempson's [Base16 Builder](https://github.com/chriskempson/base16-builder), which you can use to create your own color schemes.

## Contribute

Anybody can contribute new features and bug fixes by cloning the repository, and then sending a pull request.

## License

The MIT License (MIT)

Copyright (c) 2014 Jan T. Sott

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/m8tro-bootstrap) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`