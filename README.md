# IonicKit from eKreative

## You will need

* node/npm
* cordova
* [ionic](http://ionicframework.com/)

Install node, npm then

    npm install -g cordova ionic bower
    npm install

## Get started

Run a dev server

    ionic serve

Run on a device

    ionic run <platform>
    
Create a build

    ionic build <platform>

Emulating in real time

    ionic emulate <platform> -l -c -s

## This ionicKit includes:

1. Adding and installing [ngCordova](http://ngcordova.com/) - a collection of AngularJS extensions on top of the Cordova API;

2. API service for different requests (<access origin="*"/> <allow-intent href="*"/> in config.xml and <meta http-equiv="Content-Security-Policy" ...> in index.html) - more info here [cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist);

3. Another file system: modules;

3. New [Push Plugin](https://github.com/phonegap/phonegap-plugin-push) service;

4. There is www/js/main/config.js.dist file - copy this file in the same directory with extension ‘.js’ for correct work (this file added to .gitignore);

5. Gulp tasks with ionic’s commands: serve, build, run:

  * imagemin ­ images now in ‘~/images’ directory, but this directory is for using imagemin files in your html/css/js files: ‘www/assets/img/’

  * sourcemaps for scss and js files;

  * js-files manipulations: sourcemaps, babel, ngAnnotate, concat, uglify -> so now we have only 1 js-file in index.html.