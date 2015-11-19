$(document).on("ready", function(){
	var mondayRef = new Firebase("https://incandescent-heat-3402.firebaseio.com/monday");
	
	$(".monday-button").on("click",function(){
		var words = $(".text").val();
		mondayRef.push(words)
		$(".text").val('');
		

		mondayRef.on('value',function(snapshot) {
			console.log(words);
			//Empty out div here.
			//for(var task in snapshot.val()){
				//console.log(snapshot.val())
				var mondayContainer= $("<div>"+ words + "</div>")
				$(".monday-container").append(mondayContainer);
			//}
			

		})
		

	})
	var tuesdayRef = new Firebase("https://incandescent-heat-3402.firebaseio.com/tuesday");
	
	$(".tuesday-button").on("click",function(){
		var words2 = $(".text").val();
		tuesdayRef.push(words2)
		$(".text").val('');

		tuesdayRef.on('value',function(snapshot){
			console.log(words2);
			var tuesdayContainer = $("<div>"+ words2 + "</div>")
			$(".tuesday-container").append(tuesdayContainer)
		})
	})

	var wednesdayRef = new Firebase("https://incandescent-heat-3402.firebaseio.com/wednesday");

	$(".wednesday-button").on("click",function(){
		var words= $(".text").val();
		wednesdayRef.push(words)
		$(".text").val('');
	})

	var thursdayRef= new Firebase("https://incandescent-heat-3402.firebaseio.com/thursday");
	$(".thursday-button").on("click",function(){
		var words=$(".text").val();
		thursdayRef.push(words)
		$(".text").val('');


	})

	var fridayRef= new Firebase("https://incandescent-heat-3402.firebaseio.com/friday");
	$(".friday-button").on("click",function(){
		var words=$(".text").val();
		fridayRef.push(words)
		$(".text").val('');

	})


})