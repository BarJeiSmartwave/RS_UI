import faker from 'faker';

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
        vm.user = null;
        vm.userList = null;

        // cart
        vm.cart = [];
        vm.recommendations = [];
        vm.cartModified = false;

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

        console.log(vm);
    }

    loadModels() {

        // Use timeout to simulate a 650ms request.
        // return $timeout(function() {
            // recommendation system models
            this.rsModels =  this.rsModels || [{
                id: 1,
                name: 'Per Item'
            }, {
                id: 2,
                name: 'Per User'
            }];
        // }, 650);
    }

    modelSelected(selectedModel) {

        var thisVal = this;

        // console.log(selectedModel);
        thisVal.rsModel = selectedModel;
        thisVal.rsModelSelected = true;

        if(thisVal.rsModel == 1) {
            thisVal.isPerItem = true;
        }

        else if(thisVal.rsModel == 2) {
            thisVal.isPerItem = false;
        }
    }

    loadUserList() {
        var userList = [];

        this.userList = this.userList || userList;

        for(var x = 0; x <= 9; x++) {
            userList.push({
                id: x,
                name: faker.name.findName(),
                clusterId:  x,
                clusterName: 'Cluster ' + x
            });
        }
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

    userSelected(selectedUser) {
        console.log(selectedUser);
    }
}

export default ItemsController;
