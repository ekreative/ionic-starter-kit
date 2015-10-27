# IonicKit from eKreative

## You will need

* node/npm
* bower
* cordova
* [ionic](http://ionicframework.com/)

Install node, npm then

    npm install -g cordova ionic bower
    npm install
    bower install

## Get started

Run a dev server

    ionic serve

Run on a device

    ionic run
    
Create a build

    ionic build

## This starter kit include:

1. Adding and installing [ngCordova](http://ngcordova.com/) - a collection of AngularJS extensions on top of the 

Cordova API;

2. [angular-ios9-uiwebview.patch.js](https://gist.github.com/IgorMinar/863acd413e3925bf282c) (v1.1.1) - for ios9 webview fix;

3. API service for different requests (<access origin="*"/> <allow-intent href="*"/> in 

config.xml and <meta http-equiv="Content-Security-Policy" ...> in index.html) - more info 

here [cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist);

4. Another file system: modules;

5. Allow http requests for ios - according to [this](http://www.ekreative.com/blog/adapting-my-ionic-framework-hybrid-mobile-app-for-ios-9-problems-and-solutions) article;

6. new [Push Plugin](https://github.com/phonegap/phonegap-plugin-push) service;

7. Gulp tasks with ionic’s commands: serve, build, run:

    * imagemin ­ images now in ‘~/images’ directory, but use this directory for use 

    * sourcemaps for scss;

    * js-files manipulations: sourcemaps, babel, ngAnnotate, concat, uglify -> so now 

8. There is www/js/main/config.js.dist file - copy this file in the same directory with 

extension ‘.js’ for correct work (this file added to .gitignore);

imagemin files: ‘www/assets/img/’;

we have only 1 js-file in index.html;