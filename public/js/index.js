$(document).on("ready", function(){
	var mondayRef = new Firebase("https://incandescent-heat-3402.firebaseio.com/monday");
	
	$(".monday-button").on("click",function(){
		var words = $(".text").val();
		mondayRef.push(words)
		$(".text").val('');

		mondayRef.on('value',function(snapshot) {
			console.log(snapshot.val());
			for(var task in snapshot.val()){
				console.log(snapshot.val())
				var mondayContainer= $("<div>"+ task + "</div>")
				$(".monday-container").append(mondayContainer);
			}

		})
		

	})
	var tuesdayRef = new Firebase("https://incandescent-heat-3402.firebaseio.com/tuesday");
	
	$(".tuesday-button").on("click",function(){
		var words = $(".text").val();
		tuesdayRef.push(words)
		$(".text").val('');
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