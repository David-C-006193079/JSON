var student () = [
			{
			"name": "David Castellanos",
			"favoriteFood": "Chiken_Tikka",
			"graduated": false,
			"favorite_activities": ["Animation","Playing Guitar", "Singing"],
			"parents": 	[[{"name": "Manuel Castellanos",
					  "favoriteFood": "Tacos",
				 	 "age": 64,
				 	 "favorite_activities": ["Playing Guitar", "Excercising"]
					}],
					[{"name": "Francis Castellanos",
					  "favoriteFood": "Tacos",
					  "age": 56,
					  "favorite_activities": ["Reading", "Excercising"]
					}]]

			 }; 			/* an object with information*/
		
var jstring = JSON.stringify (student);	/* the object "student" is now a json string and attached to the object "jstring" */
					


var jstring = JSON.parse (student); /* the object "student" was converted from a json string and reassigned to the object "jstring" */
