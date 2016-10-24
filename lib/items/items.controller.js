import faker from 'faker';

class ItemsController {

    /**
     * Constructor class ItemsController
     *
     * @param {object} $scope
     */
     constructor($scope) {
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
        var scope = this;
        scope.rsModel = selectedModel;
        scope.rsModelSelected = true;

        // rs model is per item
        if(scope.rsModel == 1) {
            scope.isPerItem = true;
            scope.userIsSelected = false;
        }

        // rs model is per user
        else if(scope.rsModel == 2) {
            scope.isPerItem = false;
            scope.cartModified = false;
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

        // check if per item
        if(scope.rsModel == 1) {
            scope.recommendations = {
                modelId: 1,
                description: 'Per Item Recommendations',
                item: []
            }

            for(var i = 0; i <= item.id; i++) {
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
        var scope = this;

        console.log($index);
        // console.log(thisScope.cart);  
        // remove item from cart
        scope.cart.splice($index, 1);

        // if cart is empty hide cart
        if(scope.cart.length === 0) {
            scope.cartModified = false;
        }
    }

    userSelected(selectedUser) {
        var scope = this;
        scope.userIsSelected = true;

        // check is per user 
        if(scope.rsModel == 2) {
            scope.recommendations = {
                modelId: 2,
                description: 'Per User Recommendations',
                item: []
            }

            for(var i = 0; i <= selectedUser; i++) {
                scope.recommendations.item.push({
                    id: i,
                    name: 'Item ' + i,
                    description: 'description ' + i,
                    imageUrl: 'http://placehold.it/152x152'
                });
            }
        }

        console.log(selectedUser);
    }
}

export default ItemsController;
