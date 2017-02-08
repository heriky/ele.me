import angular from 'angular';
import ddo from './CatNav';
export default angular.module('app.components.catnav', [])
	.component('catnav', ddo)
	.name;