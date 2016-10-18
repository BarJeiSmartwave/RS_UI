import ItemsConfig from './items.config';
import ItemsController from './items.controller';
require('./items.scss');

let itemsModule = angular.module('app.items', []);

itemsModule.config(ItemsConfig);
itemsModule.controller('ItemsController', ItemsController);

export default itemsModule = itemsModule.name
