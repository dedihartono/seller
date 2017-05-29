(function() {
  var app = angular.module('store', []);

  var gem = [{
    name: 'kalimaya',
    price: 90000,
    description: 'Loream ipsum',
    outStock: false,
    canPurchase: true,
    image: {
      full: 'assets/images/0.jpg',
      tumb: 'assets/images/0.jpg',
    }
  }, {
    name: 'kalimaya2',
    price: 90000,
    description: 'Loream ipsum',
    outStock: false,
    canPurchase: true,
    image: {
      full: 'assets/images/1.jpg',
      tumb: 'assets/images/1.jpg',
    }
  }, {
    name: 'kalimaya3',
    price: 90000,
    description: 'Loream ipsum',
    outStock: false,
    canPurchase: false,
    image: {
      full: 'assets/images/2.jpg',
      tumb: 'assets/images/2.jpg',
    }
  }]

  app.controller('storeController', function() {
    this.product = gem;
  })
})();
