$(document).ready(function() {
            
            //lida
            var form = $('#order-form'),
                parsForm = form.parsley();

            form.on('submit', function(e){
			e.preventDefault();
			
		

			var thisForm = $(this);
			var formData = thisForm.serialize();		


			$.ajax({
				url: 'postmaster.php',
				type: 'POST',
				data: formData,
				success: function(fromrequest){
					var jsonData = JSON.parse(fromrequest);
					// console.dir(jsonData)
					if (jsonData.requestStatus){//запрос отправлен

						console.log('success request'),

						$.fancybox.open([
							{href : '#formsuccess'}
							],{
							type: 'inline',
							width: 260,
							fitToView: false,
							padding: 0
						})

						$('.formpopup__close').on('click', function(){
							$.fancybox.close();
						});

					}
				},
				error: function(){
				    console.log('error', arguments);
				}

			});
		
		});
});