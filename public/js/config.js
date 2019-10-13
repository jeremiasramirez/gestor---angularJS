

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

	routing config

*/
 		.when("/todos", {
 			templateUrl: "partials/todos.html",
 			controller: "todos"
 		}) 


/*

	routing delete

*/
 		.when("/delete", {
 			templateUrl: "partials/delete.html"
 		}) 


/*

	routing notification

*/
 		.when("/notification", {
 			templateUrl: "partials/notification.html",
 			controller: "notification"
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









 