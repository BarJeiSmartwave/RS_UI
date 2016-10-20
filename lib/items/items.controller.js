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

    }

    modelSelected(selectedModel) {
        this.rsModel = selectedModel;
        this.rsModelSelected = true;
    }

    viewProduct(item) {
        alert(item.name);
    }

    addToCart(item) {
        var scope = this;
        scope.cart.push(item);
        scope.cartModified = true;

        if(scope.rsModel == 1) {
            scope.recommendations = {
                modelId: 1,
                description: 'Per Item Recommendations',
                item: []
            }

            for(var i = 0; i <= 10; i++) {
                scope.recommendations.item.push({
                    id: i,
                    name: 'Product ' + i,
                    description: 'description ' + i,
                    imageUrl: 'http://placehold.it/152x152'
                });
            }
            

        }
    }

    removeFromCart($index) {
        var thisScope = this;
        thisScope.cart.splice($index, 1);
        // items.cart.splice(cartItemIndex, 1)

        if(thisScope.cart.length === 0) {
            thisScope.cartModified = false;
        }

        console.log(thisScope.cart);
    }
}

export default ItemsController;
