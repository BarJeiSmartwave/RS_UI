class ItemsController {

    /**
     * Constructor class ItemsController
     *
     * @param {object} $scope
     */
     constructor($scope) {
        'ngInject';

        var vm = this;

        // cart
        vm.cart = [];
        vm.recommendations = [];
        vm.cartModified = false;

        // recommendation system models
        vm.rsModels = [{
            id: 1,
            name: 'Per Item',
        }, {
            id: 2,
            name: 'Per User',
        }];

        // recommendations
        // vm.recommendations = [{
        //     modelId: null,
        //     item: null,
        //     description: null
        // }];


        // static item list
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
            name: 'hehrehr',
            description: 'desfsdfs',
            imageUrl: 'http://placehold.it/152x152'
        }, {
            id: 6,
            name: 'HIHI',
            description: 'Pogi',
            imageUrl: 'http://placehold.it/152x152'
        }, {
            id: 7,
            name: 'name',
            description: 'description',
            imageUrl: 'http://placehold.it/152x152'
        }];

        console.log(vm);
    }

    modelSelected(selectedModel) {
        this.rsModel = selectedModel;
        console.log(this.rsModel);
    }

    viewProduct(item) {
        alert(item.name);
    }

    addToCart(item) {
        var scope = this;
        scope.cart.push(item);
        scope.cartModified = true;

        if(scope.rsModel === 1) {
            scope.recommendations = {
                modelId: 1,
                description: 'Per Item Recommendations',
                item: []
            }

            scope.recommendations.item.push({
                    id: 7,
                    name: 'name',
                    description: 'description',
                    imageUrl: 'http://placehold.it/152x152'
                });

            console.log(scope.recommendations);
        }
    }
}

export default ItemsController;
