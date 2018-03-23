$(document).ready(function() {
$(#"register").click(function()){
  var name=$(#"name").val();
  var email =$("email").val();
	var password =$("password").val();
	var cpassword =$("cpassword").val()
	if (name=="" || email == "" password ==""|| cpassword =="" ) {
		else if (!password).match (cpassword))
		{
			alert("your passwords don't match. try again?");
			
		} else {
			$.post("register.php",{
				name1:name
				email:email
				password1:password
			},function (data) {
				if (data == 'you have successuflly Registered...'){
					$("form")[0].reset();
				}
				alart(data):
			});
		}
				
			
			);
})
		
		
		
		
		
		
		[]
	}
  
  }
} 