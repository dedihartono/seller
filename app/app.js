(function() {
  var app = angular.module('store', []);

  var gem = [{
    name: 'kalimaya',
    price: 90000,
    description: 'Loream ipsum',
  }, {
    name: 'kalimaya2',
    price: 90000,
    description: 'Loream ipsum',
  }, {
    name: 'kalimaya3',
    price: 90000,
    description: 'Loream ipsum',
  }]

  app.controller('storeController', function() {
    this.product = gem;
  })
})();
