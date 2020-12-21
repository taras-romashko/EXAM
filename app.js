(function () {
    'use strict';

    angular.module('cars', [])
        .controller('toBuyController', ToBuyController)
       
        .service('itemsService', ItemsService);

    ToBuyController.$inject = ['itemsService'];
    function ToBuyController(service) {
        var controller = this;
        controller.toBuyItems = service.getToBuyItems();

        controller.addToBought = function (itemIndex) { 
            service.addBoughtItem(itemIndex);
        }
    };

    BoughtController.$inject = ['itemsService'];
    function BoughtController(service) {
        var controller = this;
        controller.boughtItems = service.getBoughtItems();
    };

    function ItemsService() {
        var service = this;

  

        var toBuyItems = [
            new Item('Наявно автомобілів Porshe:', 2, ),
            new Item('Наявно автомобілів Audi:', 100),
            new Item('Наявно автомобілів Fiat:', 4),
            new Item('Наявно автомобілів Renaut:', 100),
            new Item('Наявно автомобілів Citroen:', 1)
        ];

        service.addBoughtItem = function (shopItemId) {
            toBuyItems.splice(shopItemId, 1);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    };


    class Item {
        constructor(name, amount) {
            this.name = name;
            this.amount = amount;
        };
    };

})();
