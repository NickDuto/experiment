


// Doesn't work

$('#item-1-4').hide();
$('#item-1-5').hide();

////////////////


var app = angular.module('app', []);

app.controller('RecentController', ['$scope', '$http', function($scope, $http) {


$scope.cars = [
  {
    year: '2004',
    make: 'Jeep',
    model: 'Grand Cherokee',
    price: '$5,950',

  },
  {
    year: '2006',
    make: 'CHRYSLER',
    model: 'PACIFICA',
    price: '$5,789'
  },
  {
    year: '2001',
    make: 'Mazda',
    model: 'Tribute',
    price: '$4,995'
  },
  {
    year: '2006',
    make: 'CHRYSLER',
    model: 'PACIFICA',
    price: '$5,789'
  },
  {
    year: '2001',
    make: 'Mazda',
    model: 'Tribute',
    price: '$4,995'
  },

  {
    year: '1997',
    make: 'Ford',
    model: 'Thunderbird',
    price: '$4,750'
  }
];

var keys = Object.keys($scope.cars);
for (i = 0; i < $scope.cars.length; i++) {
  console.log(i);
  $scope.cars[i].k = keys[i];
  console.log($scope.cars[i].k);
}


if ($scope.cars.length <= 4) {
  $('#slide-2').hide();
  $('#slide-3').hide();
  $('#circle-2').hide();
  $('#circle-3').hide();
} else if ($scope.cars.length <= 8) {
  $('#slide-3').hide();
  $('#circle-3').hide();
} else if ($scope.cars.length <= 11) {
  console.log("Nothing happens");
}

}]);
