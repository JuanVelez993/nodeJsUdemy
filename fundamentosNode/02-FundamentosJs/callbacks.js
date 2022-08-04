const getUserByID = (id, callback) => {
    const user = {
        //la expresion id:id es redundante e innecesaria
        id,
        nombre: "El pepe"
    }
    setTimeout(() => {
        callback(user)
    }, 1500)

}

getUserByID(55, (user) => {
    console.log(user);
    console.log(user.nombre.toUpperCase());
})