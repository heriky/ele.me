import angular from 'angular';
import ddo from './Sidebar';

export default angular.module('app.components.sidebar', [])
	.component('sidebar', ddo)
	.name;