function login (user, password){
    ​
    switch (true){
        case user == undefined || password == undefined:
                console.log("Debe ingresar los datos requeridos");
                break;
        case user === 'admin' && password === 1234:
            console.log('Bienvenido a nuestro sitio!');
            break;
        case user !== 'admin'&& password === 1234:
            console.log('Usuario incorrecto');
            break;
        case user === 'admin' && password !== 1234:
            console.log('Contraseña incorrecta');
            break;
        case user !== 'admin' && password !== 1234:
            console.log('Usuario y Contraseña incorrectos')
        default: 
        
        break;
    }
    }
    