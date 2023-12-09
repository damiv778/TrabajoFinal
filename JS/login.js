
let usuario = document.getElementById('username').value;
let password = document.getElementById('password').value;

console.log(usuario);
console.log(password);


let administrador = {
    usuario: '38778715',
    password: '456456'
}

console.log(`El usuario es ${administrador.usuario} y la contraseña es ${administrador.password}`);


//Funcion Error
function error() {
    console.log('Su Usuario o Contraseña es INCORRECTO');
    alert('Su Usuario o Contraseña es INCORRECTO');
}

function login() {

    let user = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    console.log(`El usuario es ${usuario} y la contraseña es ${password}`);

    if(username == "" || password == ""){
        //alert('Por favor ingrese un usuario y contraseña');
        location.href = 'error.html'
    }

    if(administrador.username == usuario && administrador.password == password){
       location.href = 'index.html'
    }else{
       console.log(location.pathname)
    }

    let inputUser = document.getElementById('usuario');
    inputUser.value = "";

    let inputPass = document.getElementById('password');
    inputPass.value = ""
}