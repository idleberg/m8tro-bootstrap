# M8tro Bootstrap Theme

*This is work in progress*

Bootstrap theme inspired by Windows Phone's [Modern UI](http://msdn.microsoft.com/en-us/library/windows/apps/dn465800.aspx) (aka “Metro”).

![Animated Screenshot](https://raw.githubusercontent.com/idleberg/m8tro-bootstrap/master/screenshot.gif)

[Demo Time](http://idleberg.github.io/m8tro-bootstrap/)


## Fonts

This theme was created with Modern UI's[Segoe](http://www.microsoft.com/typography/fonts/family.aspx?FID=331) font-family in mind. While this commercial font is largely available available on the Windows platform (Vista and later, Windows Phone), fallback fonts are required for other platforms. 

Font | Platform
-----|---------
[Segoe UI](http://www.microsoft.com/typography/fonts/family.aspx?FID=331)         | Windows Vista (or later), Windows Phone 7 (or later)
[Roboto Condensed](http://www.google.com/fonts/specimen/Roboto+Condensed) | Android, Web font (optional)
[Fira Sans](https://www.mozilla.org/en-US/styleguide/products/firefox-os/typeface/)        | Firefox OS
[Neue Helvetica](http://www.linotype.com/1266/neuehelvetica-family.html)   | iOS, Mac OS X

Should you prefer a more consistent font behaviour, [Lato](https://www.google.com/fonts#UsePlace:use/Collection:Lato) on Google Fonts is a recommended alternative.

## Usage

### End user

Download a copy of [m8tro.min.css](https://raw.githubusercontent.com/idleberg/m8tro-bootstrap/master/dist/m8tro.min.css) and use it in place of your Bootstrap 3.1.1 (or compatible) style-sheet. It is [not advised](http://stackoverflow.com/a/5503156/1329116) to embed a link to the raw file hosted on GitHub, since it increases your page's load time.

This theme can be used with [Bootstrap Listr](https://github.com/idleberg/Bootstrap-Listr), since it was somewhat designed for that purpose (well, kinda!)

### Developers

1. Clone the repository `git clone https://github.com/idleberg/m8tro-bootstrap.git`
2. Edit any of the files in the *src*-folder
3. Run `./m8ke` (or `./m8ke theme`) to run the [LESS](http://lesscss.org/) compiler

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