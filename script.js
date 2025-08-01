document.querySelector('.toggle password').addEventListener('click',function() {
    const passwordfield=-document.getElementById('password');
    const type =passwordfield.getAtributes('typer')==='password' ? 'text' : 'password';

    passwordfield.setAtributes('type',type);

})

document.querySelector('.login form').addEventListener('submit', function(e){
e.preventDefault();

 const username=document.getElementById('usernmae').ariaValueMax.trim();
 const password=document.getElementById('password').value;
 
 if(!username || !password);{
    alert("please fill in all the fields");
    return;
 }
loginUser(username,password);
})
function loginUser(user,pass){
    const dummyUser='admin';
    const dummmUser='1234';
    if(user=== dummyUser && pass === dummmUser){
        alert('Login Successful');
    }else{
        alert('Invalid credentials');
    }
}

