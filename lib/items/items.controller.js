class ItemsController {

    /**
     * Constructor class ItemsController
     *
     * @param {object} $scope
     */
     constructor($scope, $timeout) {
        'ngInject';

        var vm = this;
        vm.rsModel = null;
        vm.rsModels = null;

        // cart
        vm.cart = [];
        vm.recommendations = [];
        vm.cartModified = false;

        // recommendations
        // vm.recommendations = [{
        //     modelId: null,
        //     item: null,
        //     description: null
        // }];


        // static item list
        vm.itemsList = [];

        for(var j = 0; j <= 9; j++) {
            vm.itemsList.push({
                id: j,
                name: 'Item ' + j,
                description: 'description ' + j,
                imageUrl: 'http://placehold.it/152x152'
            });
        }

    }

    loadModels() {

        // Use timeout to simulate a 650ms request.
        // return $timeout(function() {

            // recommendation system models
            this.rsModels =  this.rsModels  || [{
                id: 1,
                name: 'Per Item'
            }, {
                id: 2,
                name: 'Per User'
            }];

        // }, 650);
    }

    modelSelected(selectedModel) {

        // console.log(selectedModel);
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

            for(var i = 0; i <= 5; i++) {
                scope.recommendations.item.push({
                    id: i,
                    name: 'Item ' + i,
                    description: 'description ' + i,
                    imageUrl: 'http://placehold.it/152x152'
                });
            }
        }
    }

    removeFromCart($index) {
        var thisScope = this;

        // console.log(thisScope.cart);  
        // remove item from cart
        thisScope.cart.splice($index, 1);

        // if cart is empty hide cart
        if(thisScope.cart.length === 0) {
            thisScope.cartModified = false;
        }
    }
}

export default ItemsController;
