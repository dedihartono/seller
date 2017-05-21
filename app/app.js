(function() {
  var app = angular.module('appKatalog', []);


  app.controller('katalogContoller', function() {
    this.katalog = data;
  });

  var data = [{
      nama: 'kalimaya',
      harga: 70000,
      keterangan: 'batu akik yang cukup diminati',
      pembelian: true,
    },
    {
      nama: 'merah delima',
      harga: 170000,
      keterangan: 'batu akik mahal',
      pembelian: false,
    },
    {
      nama: 'iris',
      harga: 90000,
      keterangan: 'batu akik',
      pembelian: true,
    },
    {
      nama: 'hijau',
      harga: 270000,
      keterangan: 'batu akik',
      pembelian: false,
    }
  ];
})();
