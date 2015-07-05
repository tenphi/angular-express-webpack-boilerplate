require('./reset.less');

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import MainCtrl from './main.ctrl.es6.js';
import appConfig from './config.es6.js';

angular.module('app', [uiRouter])
  .controller('MainCtrl', MainCtrl)
  .config(appConfig);
