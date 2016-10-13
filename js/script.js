


// Doesn't work



////////////////


var app = angular.module('app', []);

app.controller('RecentController', ['$scope', '$http', function($scope, $http) {



$scope.cars = [
  {
    year: '2004',
    make: 'Jeep',
    model: 'Grand Cherokee',
    price: '$5,950',
    pic: 'img/jeep-grand-cherokee.jpg'

  },
  {
    year: '2006',
    make: 'CHRYSLER',
    model: 'PACIFICA',
    price: '$5,789',
    pic: 'img/chrysler-pacifica.jpg'
  },
  {
    year: '2001',
    make: 'Mazda',
    model: 'Tribute',
    price: '$4,995',
    pic: 'img/mazda-tribute.jpg'
  },
  {
    year: '1997',
    make: 'Ford',
    model: 'Thunderbird',
    price: '$4,750',
    pic: 'img/ford-thunderbird.jpg'
  },
  {
    year: '1989',
    make: 'Chevy',
    model: 'Astro',
    price: '$1,500',
    pic: 'img/chevy-astro.jpg'
  },
  {
    year: '2000',
    make: 'Dodge',
    model: 'Neon',
    price: '$2,950',
    pic: 'img/dodge-neon.jpg'
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
