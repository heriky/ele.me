import angular from 'angular' ;
import components from './components';
import './assets/normalize.css';
import './assets/style.css'
import toy from './assets/js/toy.js'

// 主模块入口
angular.module('app', [components]);

// 小功能
toy();