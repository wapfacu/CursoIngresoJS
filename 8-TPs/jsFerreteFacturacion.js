/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var app = angular.module('ferreteFacturacion', []);

app.controller("controladorFacturacion",function($scope){
	$scope.test = "Hola Angular";

$scope.datos={};
	$scope.datos.precioUno="666";
	$scope.datos.precioDos="213";
	$scope.datos.precioTres="584";

	$scope.sumar = function(){
		var uno = parseInt($scope.datos.precioUno);
		var dos = parseInt($scope.datos.precioDos);
		var tres = parseInt($scope.datos.precioTres);

		$scope.resultado = uno + dos + tres;
		console.log($scope.resultado);
	};

	$scope.promedio = function(){
		$scope.sumar();
		$scope.promedio = $scope.resultado / parseInt("3");
		console.log($scope.promedio);
	};

	$scope.preciofinal = function(){
		$scope.sumar();
		$scope.pfinal = $scope.resultado * 1.21;
		console.log($scope.pfinal);
	};
});


