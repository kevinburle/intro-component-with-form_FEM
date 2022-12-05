const required = document.querySelectorAll('.required');
const email = document.getElementById('email')
const submit = document.getElementById('submit');
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

required.forEach(function(item){

    submit.addEventListener('click', function(){

        if(item.value === ""){
            item.parentElement.classList.add('active');
        } else {
            item.parentElement.classList.remove('active')
        }

        if (!email.value.match(mailFormat)) {
            email.parentElement.classList.add('active');
            email.value = ""
            email.placeholder = 'email@example.com'
        }
    })
})