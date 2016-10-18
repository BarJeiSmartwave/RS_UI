class ItemsController {

    /**
     * Constructor class ProductsController
     *
     * @param {object} $scope
     */
     constructor($scope) {
        'ngInject';

        var vm = this;

        vm.rsModels = [{
            id: 1,
            name: 'Per Item',
        }, {
            id: 2,
            name: 'Per User',
        }];


        vm.getSelectedText = (selectedModel) => {
            console.log(selectedModel);
        };

        vm.itemsList = [{
            id: 0,
            name: 'Hello',
            description: '',
            imageUrl: ''
        }, {
            id: 1,
            name: 'World',
            description: '',
            imageUrl: ''
        }, {
         id: 2,
         name: 'Yeah',
         description: '',
         imageUrl: ''
     }, {
        id: 3,
        name: 'Hey',
        description: '',
        imageUrl: ''
    }, {
        id: 4,
        name: 'Yeah hi yeah',
        description: '',
        imageUrl: ''
    }];

    console.log(vm);

}

}

export default ItemsController;
