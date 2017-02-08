import angular from 'angular';
import ddo from './Navbar';

export default angular.module('app.components.navbar',[])
	.component('navbar', ddo)
	.name;