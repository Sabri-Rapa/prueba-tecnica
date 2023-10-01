const loginValidation = (data) => {

    let errors = {};

    if(!data.email){
        errors.email = 'El email es requerido'
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){
        errors.email = 'No tiene formato mail'
    }else if(data.email.length > 35){
        errors.email = 'El email es demasiado largo'
    }

    if(!data.password){
        errors.password = 'La contraseña es requerida'
    }else if(!/\d/.test(data.password)){
        errors.password = 'El email debe tener al menos un número'
    }else if(data.password.length < 5){
        errors.password = 'La contraseña debe tener 5 o más caracters';
    }


    return errors;
}

export default loginValidation;