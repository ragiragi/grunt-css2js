/*jshint node: true*/

/*
 * grunt-css2
 * https://github.com/ragiragi/grunt-css2js
 *
 * Copyright (c) 2013 Choi Seong-Rak
 * Licensed under the BSD license.
 */

module.exports = function (grunt) {
    'use strict';

    grunt.registerMultiTask('css2js', 'Convert a CSS File to JS DOM Script.', function () {

      // Iterate of the Files Array
      this.files.forEach(function(file) {

        var contents = file.src.filter(function(filepath) {
          // Remove nonexistent files (it's up to you to filter or warn here).
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          } else {
            return true;
          }
        }).map(function(filepath) {
          // Read and return the file's source.
          return grunt.file.read(filepath);
        }).join('\n');

        var cssInJavascriptString = convertInJSString(contents);

        grunt.file.write(file.dest, '(function () {' +
            '    var cssText = ' + cssInJavascriptString + ',' +
            '        styleEl = document.createElement("style");' +
            '    document.getElementsByTagName("head")[0].appendChild(styleEl);' +
            '    if (styleEl.styleSheet) {' +
            '        if (!styleEl.styleSheet.disabled) {' +
            '            styleEl.styleSheet.cssText = cssText;' +
            '        }' +
            '    } else {' +
            '        try {' +
            '            styleEl.innerHTML = cssText' +
            '        } catch(e) {' +
            '            styleEl.innerText = cssText;' +
            '        }' +
            '    }' +
            '}());');

        grunt.log.writeln('File "' + file.dest + '" created.');

      });

      return true;
    });

    function convertInJSString(css) {
        return css.split("\n").map(function (l) {
            l = l.replace(/\\/g, '\\\\');
            l = l.replace(/\"/g, '\\"');
            return '"' + l + '\\n"';
        }).join(" + \n");
    }

};
