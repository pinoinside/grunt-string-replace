# grunt-string-replace
Simple Grunt plugin for string replacement

## What's this?

This [Grunt](http://gruntjs.com/) plugin allows you to replace a string with another in the requested file(s).
I am aware that there are plenty other similar plugins however none did exactly what I wanted.


## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-string-replace --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-string-replace');
```

## The "stringreplace" task

### Overview
In your project's Gruntfile, add a section named `stringreplace` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	stringreplace: {
      options: {
        replace: "all",
        case_sensitive: true
      },
   		app: {
       		src: 'src/*/page.html',
       		dest: 'page.post.html',
        	before: 'test',
					after: 'toast'
      	}
   },
})
```

### Usage Examples

The plugin expects four parameters:

* `src` - the file or files where the plugin will search the string.
* `dest` - the destination file (in the same folder of original).
* `before` - the string to be searched.
* `after` - the new string.

There are two options:
* `replace` - if "all" (default), it replaces every occurrence of the requested string, if "first", it will replace only the first occurrence in each file.
* `case_sensitive` - if true (default) it will search matches case sensitive, it will do case insensitive if false.


## TODO

* Add unit tests

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and test your code using [Grunt](http://gruntjs.com/).

If you're creating a pull request, also please add yourself to the `CONTRIBUTORS.txt` file (or create it if it's necessary).

## Release History
* 0.0.1 - Initial Release

## License
Copyright (c) 2016 Andrea Pinucci, licensed under GNU General Public License v 3.0
