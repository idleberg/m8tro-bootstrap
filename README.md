# M8tro Bootstrap Theme

[![Bower](https://img.shields.io/bower/v/m8tro-bootstrap.svg?style=flat-square)](https://github.com/idleberg/m8tro-bootstrap/releases)
[![npm](https://img.shields.io/npm/v/m8tro-bootstrap.svg?style=flat-square)](https://www.npmjs.com/package/m8tro-bootstrap)
[![Travis](https://img.shields.io/travis/idleberg/m8tro-bootstrap.svg?style=flat-square)](https://travis-ci.org/idleberg/m8tro-bootstrap)
[![David](https://img.shields.io/david/dev/idleberg/m8tro-bootstrap.svg?style=flat-square)](https://david-dm.org/idleberg/m8tro-bootstrap?type=dev)
[![npm](https://img.shields.io/npm/l/m8tro-bootstrap.svg?style=flat-square)](https://www.npmjs.org/package/m8tro-bootstrap)

Bootstrap theme inspired by Windows Phone's [Modern UI](http://msdn.microsoft.com/en-us/library/windows/apps/dn465800.aspx) (aka “Metro”)

*Watch a [live demo](http://idleberg.github.io/m8tro-bootstrap/)!*

## Fonts

This theme was created with Modern UI's [Segoe](http://www.microsoft.com/typography/fonts/family.aspx?FID=331) font-family in mind. While this commercial font is largely available on the Windows platform (Windows Phone, Windows Vista and later), system-default fonts will be used as fallback on other platforms. 

Font | Platform
-----|---------
[Segoe UI](http://www.microsoft.com/typography/fonts/family.aspx?FID=331)         | Windows Vista (or later), Windows Phone 7 (or later)
[Roboto Condensed](http://developer.android.com/design/style/typography.html) | Android, Web font ([optional](http://www.google.com/fonts/specimen/Roboto+Condensed))
[Fira Sans](http://mozilla.github.io/Fira/)        | Firefox OS, Web font ([optional](http://www.google.com/fonts/specimen/Fira+Sans))
[Neue Helvetica](http://www.linotype.com/1266/neuehelvetica-family.html)   | iOS, Mac OS X

## Installation

Style-sheets are meant to be used instead of `bootstrap.min.css`, there's no need to include both files.

### Package Managers

Pre-compiled CSS files can be installed using [Bower](http://bower.io/) or [npm](https://www.npmjs.com):

```bash
# Install from Bower
bower install m8tro-bootstrap

# Install from npm
npm install m8tro-bootstrap
```

### CDN

As of version 3.3.2, the style-sheet is hosted various content delivery networks (CDN). Serving files via SSL is encouraged, though you can always use [schemeless URLs](http://www.paulirish.com/2010/the-protocol-relative-url/) as well.

Service  | URL
---------|----
[cdnjs](http://cdnjs.com/libraries/m8tro-bootstrap)   | `https://cdnjs.cloudflare.com/ajax/libs/m8tro-bootstrap/3.3.7/m8tro.min.css`
[jsDelivr](http://www.jsdelivr.com/#!bootstrap.m8tro) | `https://cdn.jsdelivr.net/bootstrap.m8tro/3.3.7/m8tro.min.css`

**Note:** It is [not advised](http://stackoverflow.com/a/5503156/1329116) to embed a link to the raw file hosted on GitHub.

### Manual Installation

Use the style-sheet from a [release](https://github.com/idleberg/m8tro-bootstrap/releases) or download the latest development version of [m8tro.min.css](https://raw.githubusercontent.com/idleberg/m8tro-bootstrap/master/dist/css/m8tro.min.css).

## Developers

### Gulp task

The provided `gulpfile.js` will serve as our primary build tool. In order to use it, you need to have [Node.js](http://nodejs.org/download/) and [Gulp](http://gulpjs.com/) installed.

Once set up, install all required Node packages:

```bash
yarn || npm install
```

Several gulp tasks are now available:

Task    | Description
--------|------------------
`make`  | build M8tro theme
`setup` | choose Bootstrap [components](http://getbootstrap.com/customize/) & build M8tro theme
`clean` | delete contents of distribution folder
`lint`  | lint included LESS and JavaScript files

A special case is building the theme for [Bootstrap Listr](https://github.com/idleberg/Bootstrap-Listr), which only uses a subset of Bootstrap's features. To do so use `gulp setup --listr`. The resulting CSS will be half the size, the JavaScript about a twelfth.

## Customize

This repository includes templates for Chris Kempson's [Base16 Builder](https://github.com/chriskempson/base16-builder), which you can use to create your own color schemes.

## Contribute

Anybody can contribute new features and bug fixes by cloning the repository, and then sending a pull request.

## License

The MIT License (MIT)

Copyright (c) 2014-2017 Jan T. Sott

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/m8tro-bootstrap) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
