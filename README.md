# Descripción #
Este repositorio contiene un archivo index.ts, dentro encontraremos un pequeño servidor web construido con express. Se han incluido dos endpoints sobre los cuales vamos a trabajar.

# How To Execute #

Este proyecto requiere el uso de yarn. Para levantarlo, primero instalar las dependencias usando el comando yarn, luego correr el script "yarn start"

### Instrucciones ###

1. Usaremos las dos siguientes URLs: 
* https://jsonplaceholder.typicode.com/users
* https://jsonplaceholder.typicode.com/todos

La primera URL nos muestra un listado de usuarios, y la segunda una lista de tareas por hacer (to-do's). Ambos listados estan relacionados. Permitido el uso de librerias. 

2. Modificar el endpoint /todos de manera que devuelva la lista de tareas con sus usuarios respectivos.

    {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false,
        "user": {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
        }
    }
    
3. Modificar el endpoint /users de manera que devuelva una lista de usuarios con sus tareas respectivas, pero solo mostrando las tareas completadas para cada usuario.

La respuesta deberá ser un listado de objetos con la siguiente forma:

    { 
        "id": 1,
        "email": "Sincere@april.biz",
        "name": "Leanne Graham",
        "phone": "1-770-736-8031 x56442",
        "username": "Bret", 
        "tasks": [
            {
                "id": 4,
                "title": "et porro tempora"
            },
            {
                "id": 8,
                "title": "quo adipisci enim quam ut ab"
            }
        ]
    }