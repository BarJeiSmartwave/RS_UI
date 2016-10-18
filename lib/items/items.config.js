class ItemsConfig {

    static initRoute ($stateProvider, $urlRouterProvider) {
        'ngInject';
        $stateProvider.state('public.items', {
            url: "/items",
            views: {
                'content@': {
                    templateUrl: require("./items.html"),
                    controller: "ItemsController as items"
                }
            }
        });
        $urlRouterProvider.otherwise("/public/home");
    }
}

export default ItemsConfig.initRoute;