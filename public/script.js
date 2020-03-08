if(jQuery){
    console.log('Loaded');
} else {
	console.log('Not loaded');
}

$('button').click(function(){
    let firstName = $('#first_name').val();
    let lastName = $('#last_name').val();
    let email = $('#email').val();
    let address = $('#address').val();
    let phone = $('#phone').val();
    let password = $('#password').val();
    console.log(firstName, lastName, email, address, phone, password);
});


