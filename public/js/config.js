

path.config(function($routeProvider){

	$routeProvider

	/*

		route buscar 

	*/
		.when("/buscar",{
			templateUrl: 'partials/buscar.html',
			controller: "searchs"
		
		})

/*

	routing home

*/
		.when("/home",{
			templateUrl: "partials/home.html"
		})	


/*

	routing editar

*/
		.when("/editar",{
			templateUrl: "partials/editar.html",
			controller: "editar"
		})	


/*

	routing config

*/
 		.when("/todos", {
 			templateUrl: "partials/todos.html",
 			controller: "todos"
 		}) 


/*

	routing delete

*/
 		.when("/remover", {
 			templateUrl: "partials/remover.html",
 			controller: "remover"
 		}) 


/*

	routing notification

*/
 		.when("/notification", {
 			templateUrl: "partials/notification.html"
 		}) 

/*

	routing when distint path

*/
 		.otherwise({
 			redirectTo: "/home"
 		})

});




/*

	controller - buscar

*/
path.controller("searchs", ["$scope", function($scope){

	$scope.persons = ["Luis", "Fernando", "Miguel", "Daniel", "Jeremias", "Jonathan" , "Jonatan",
		"Pilar", "Danna" , "Melvin", "Lucia" , "Teresa", "Brenda" ,"Frank", "Franco", "Berenice",
		"Brandon", "Boli", "Pirulo", "Mateo", "Maria", "Rosa", "Ronnie", "Rainer", "Randy"
	];

}])




/*

	controller - todos

*/
path.controller("todos", ["$scope", function($scope){

	$scope.all = ["Luis", "Fernando", "Miguel", "Daniel", "Jeremias", "Jonathan" , "Jonatan",
		"Pilar", "Danna" , "Melvin", "Lucia" , "Teresa", "Brenda" ,"Frank", "Franco", "Berenice",
		"Brandon", "Boli", "Pirulo", "Mateo", "Maria", "Rosa", "Ronnie", "Rainer", "Randy"
	];

}])




/*

	controller - remover

*/
path.controller("remover", ["$scope", function($scope){

	$scope.rm = ["Luis", "Fernando", "Miguel", "Daniel", "Jeremias", "Jonathan" , "Jonatan",
		"Pilar", "Danna" , "Melvin", "Lucia" , "Teresa", "Brenda" ,"Frank", "Franco", "Berenice",
		"Brandon", "Boli", "Pirulo", "Mateo", "Maria", "Rosa", "Ronnie", "Rainer", "Randy"
	];

}])



/*

	controller - editar

*/
path.controller("editar", ["$scope", function($scope){

	$scope.edit = ["Luis", "Fernando", "Miguel", "Daniel", "Jeremias", "Jonathan" , "Jonatan",
		"Pilar", "Danna" , "Melvin", "Lucia" , "Teresa", "Brenda" ,"Frank", "Franco", "Berenice",
		"Brandon", "Boli", "Pirulo", "Mateo", "Maria", "Rosa", "Ronnie", "Rainer", "Randy"
	];

}])









 