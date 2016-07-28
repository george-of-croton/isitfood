var request = require('superagent')
var submitBtn = document.getElementById("submitBtn")
var result = document.getElementById('result')
var userInput = document.getElementById('food')

submitBtn.addEventListener('click', foodify) //run function on click

function foodify(){
	request
		.get('https://api.fda.gov/food/enforcement.json?api_key=TBxGKOBmVwQCD4qI9u1ehtNugrqc52iwD62btXTq&search=' + userInput.value)
		.end(function(err, res){
			if(err || userInput.value == ''){
				result.innerHTML="no, that's not food"
				}
			else {
					console.log(userInput.value)
					result.innerHTML="yes, it is food"
					result.class = "success"
				}
		})
}