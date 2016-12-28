/*
 * grunt-string-replace
 *
 *
 * Copyright (c) 2016 Andrea Pinucci
 * Licensed under GNU General Public License v 3.0
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('stringreplace', 'String replace for text files.', function () {
    var options = this.options({
      replace: 'all',
      case_sensitive: true
    });

    this.files.forEach(function (file) {
      var dest = file.dest;
      var src = file.src.filter(function (filepath) {
        if (!grunt.file.exists(filepath))
        {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }
        else
        {
          var contents = grunt.file.read(filepath);
          var cs = contents.split("\n");
          var found = false;
          var opt = "";
          var test = "";
          if(options.replace == "all")
          {
            opt += "g";
          }
          if(options.case_sensitive == false)
          {
            opt += "i";
            test = "i";
          }
          for (var i = 0; i < cs.length; i++)
          {
              if (cs[i].search(new RegExp(file.before, test)) != -1)
              {
                var output = cs[i].replace(new RegExp(file.before, opt), file.after);
                cs[i] = output;
                found = true;
                if(options.replace == "first")
                {
                  grunt.log.writeln('Break');
                  break;
                }
              }
          }
          var dcontents = cs.join("\n");
          var folder = filepath.split( '/' ).slice( 0, -1 ).join( '/' );
          var dest_path = "." + folder + "/" + dest;
          grunt.file.write(dest_path, dcontents);
          grunt.log.writeln('File "' + dest_path + '" created.');
        }
      })
    });
  });
};
