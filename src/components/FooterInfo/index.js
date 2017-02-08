import angular from 'angular';
import ddo from './FooterInfo'

export default angular.module('app.components.footerinfo', [])
	.component('footerinfo', ddo)
	.name;