//https://www.coindesk.com/api/
console.clear();

let api_url = "https://api.coindesk.com/v1/bpi/currentprice.json";

// create a new module
let btc_app = angular.module('btc_app',[]);

//price controller
btc_app.controller('price', function ($scope){
	
	//update definition
	function update(round){
		
		//using jquery to grab information
		$.getJSON(api_url, function(data){
			
			//parse out price
			let current_btc = data.bpi.USD.rate_float;
			//console.log(current_btc);

			//give original number
			$scope.btc = current_btc;
			
			$scope.$apply();	//vital piece of the puzzle
		});
	}
	
	//initial call
	update();
	
	//update button click 
	$scope.update_price = function(){
		update();
	};
});

//flashing when trying to update
$("#update").click(function() {
	$('#title_input').fadeOut(100).fadeIn(100);
});

//cursor blinking focus; uncomment this for keyboard focus to be on your input
$(".focus").focus();

function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}
