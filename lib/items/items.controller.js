class ItemsController {

    /**
     * Constructor class ItemsController
     *
     * @param {object} $scope
     */
     constructor($scope) {
        'ngInject';

        var vm = this;

        vm.cart = [];
        vm.cartModified = false;

        vm.rsModels = [{
            id: 1,
            name: 'Per Item',
        }, {
            id: 2,
            name: 'Per User',
        }];

        vm.itemsList = [{
            id: 0,
            name: 'Hello',
            description: 'Pogi',
            imageUrl: 'http://placehold.it/152x152'
        }, {
            id: 1,
            name: 'World',
            description: 'Pogi',
            imageUrl: 'http://placehold.it/152x152'
        }, {
             id: 2,
             name: 'Yeah',
             description: 'Pogi',
             imageUrl: 'http://placehold.it/152x152'
         }, {
            id: 3,
            name: 'Hey',
            description: 'Pogi',
            imageUrl: 'http://placehold.it/152x152'
        }, {
            id: 4,
            name: 'Yeah hi yeah',
            description: 'Pogi',
            imageUrl: 'http://placehold.it/152x152'
        }, {
            id: 5,
            name: 'HIHI',
            description: 'Pogi',
            imageUrl: 'http://placehold.it/152x152'
        }, {
            id: 6,
            name: 'HIHI',
            description: 'Pogi',
            imageUrl: 'http://placehold.it/152x152'
        }];

        console.log(vm);
    }

    modelSelected(selectedModel) {
        console.log(selectedModel);
    }

    addToCart(item) {
        var scope = this;

        scope.cart.push(item);
        scope.cartModified = true;

        console.log(scope);
    }

}

export default ItemsController;
