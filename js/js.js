

document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);


function menuClick(){
    document.getElementsByClassName('MobileNavMenu')[0].classList.toggle('MobileNavMenuDeactivate')
    document.getElementsByClassName('fa-times')[0].classList.toggle('xicon')
    document.getElementsByClassName('fa-bars')[0].classList.toggle('icon')
}



function login(){

    let email = document.getElementById('email').value.trim()
    let pw = document.getElementById('pw').value.trim()



    let email_ad = "eshban"
    let password ="12345"

    if(email_ad == email && password == pw){
        document.getElementById('link-button').addEventListener('click', function() {
            window.location.href = 'http://127.0.0.1:5500/pages/home.html#carouselExampleIndicators';
        });
    }else{
        alert('please try again')
        document.getElementById('error').innerHTML = "Please try again"
        
    }
   
}
function toggleChat() {
    var chatBox = document.getElementById('chatBox');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
}




