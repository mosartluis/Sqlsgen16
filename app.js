const express = require('express');
const app = express();

app.get('/me', (request, response) => {
    response.status(200).json({
        message: 'Luis Humberto, 25 years old, Colombia',
        verb: request.method
    })
})

app.post('/hobbies', (request, response) => {
    response.status(200).json({
        message: 'See movies, Sing, Read',
         verb: request.method
     })
 })

 app.patch('/metas', (request, response) => {
    response.status(200).json({
         message: 'Graduate on Academlo, Get my first job wiht developer',
         verb: request.method
     })
 })

app.put('/business', (request, response) => {
   response.status(200).json({
        message: 'Google , Globant, Facebook',
        verb: request.method
    })
})

app.listen(8000, () => {
 console.log('Server sartated at port 8000')   
})


//? HTTP
//? verbos
    //* GET
    //* POST
    //* PUT (ACTUALIZA todo, hay que pasarle toda la info a actualizar)
    //* PATCH (ACTUALIZA UNA PARTE ejmplo le paso la contraseña para actualizar)
    //* DELETE
    
    //? Status
    //* 100
    //* 200 status exitosos
    //* 300 redireccionamientos
    //* 400 
    //* 500 erorres del lado del servidor

    //? headers
