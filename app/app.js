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
      barang_kosong :false,
    },
    {
      nama: 'merah delima',
      harga: 170000,
      keterangan: 'batu akik mahal',
      pembelian: false,
      barang_kosong :true,
    },
    {
      nama: 'iris',
      harga: 90000,
      keterangan: 'batu akik',
      pembelian: true,
      barang_kosong :false,
    },
    {
      nama: 'hijau',
      harga: 270000,
      keterangan: 'batu akik',
      pembelian: false,
      barang_kosong :true,
    }
  ];
})();
