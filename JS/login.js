
let DNI = document.getElementById('DNI').value;
let password = document.getElementById('password').value;

console.log(DNI);
console.log(password);


let administrador = {
    user: '38778715',
    pass: 'ee715e'
}

console.log(`El usuario es ${administrador.user} y la contraseña es ${administrador.pass}`);


//Funcion Error
function errorpass() {
    console.log('Su Usuario o Contraseña es INCORRECTO');
    alert('Su Usuario o Contraseña es INCORRECTO');
}

function login() {

    let user = document.getElementById('DNI').value;
    let password = document.getElementById('password').value;
    
    //alert(`El usuario es ${user} y la contraseña es ${password}`);

    console.log(`El usuario es ${user} y la contraseña es ${password}`);

    if(user == "" || password == ""){
        //alert('Por favor ingrese un usuario y contraseña');
        location.href = onclose="errorpass()"
    }

    if(administrador.user == user && administrador.pass == password){
       location.href = 'index.html'
    }else{
       console.log(location.pathname)
    }

    let inputUser = document.getElementById('DNI');
    inputUser.value = "";

    let inputPass = document.getElementById('password');
    inputPass.value = "";

    

}