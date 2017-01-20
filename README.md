# grunt-css2js

convert a css file into DOM script to inline style object

## Example

    /* foo.css */
    .foo {
        color: red;
    }

will be converted to

    // foo.css.js
    (function () {
        var cssText = ".foo {\n" +
                      "    color:red;\n" +
                      "}";
        // some DOM script to inline style element
    }());

## Getting Started

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-css2js`

Then add this line to your project's `Gruntfile.js` gruntfile:

    grunt.loadNpmTasks('grunt-css2js');


[grunt]: https://github.com/gruntjs/grunt
[getting_started]: http://gruntjs.com/getting-started

## Documentation

in Gruntfile.js:

    grunt.initConfig({
        ...
        css2js: {
            foo: {
                src: 'src/foo.css',
                dest: 'dist/foo.css.js'
            },
            bar: {
                src: [ 'src/bar/a.css', 'src/bar/b.css' ],
                dest: 'dist/bar.css.js'
            }
        }
        ...
    });

## Release History

### 0.2.6

- Avoid creating JavaScript code when CSS files are empty. by @nidorx

### 0.2.5

- Fix missing semicolon for linters by @Lumis11

### 0.2.4

- beautify css injection snippet by @eastkiki
- add a sample task into Gruntfile.js by @eastkiki

### 0.2.3

- fixes issue with &lt;cr&gt;&lt;lf&gt; line ended source files.
- removes trailing a space.

### 0.2.1

- handle escaped characters by @aoberoi

### 0.2.0

- Support for grunt ~0.4.1
- fixes issues with double quotes by @aoberoi

### 0.1.1

bump up version number to force updating readme in npmjs.org

### 0.1.0

first release

## License
Copyright (c) 2013 Choi Seong-Rak
Licensed under the BSD license.
